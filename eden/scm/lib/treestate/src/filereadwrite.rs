/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This software may be used and distributed according to the terms of the
 * GNU General Public License version 2.
 */

use std::fs::File;
use std::io;
use std::io::BufWriter;
use std::io::Cursor;
use std::io::Read;
use std::io::Seek;
use std::io::SeekFrom;
use std::io::Write;

use fs2::FileExt;

pub trait FileSync {
    fn sync_all(&mut self) -> io::Result<()>;
}

pub trait FileLock {
    /// Lock exclusively (across threads and processes).
    /// Block if the lock was held by others.
    ///
    /// If the lock is held by `self`, then the function will just increase an
    /// internal lock counter and return immediately.
    ///
    /// Use `unlock` or `drop` to unlock.
    fn lock_exclusive(&mut self) -> io::Result<()>;

    /// Cancel one `lock_exclusive` invocation.
    ///
    /// If `lock_exclusive` is called `N` times, it requires `unlock` to be
    /// called `N` times to unlock.
    ///
    /// If `self` gets dropped, then the lock is automatically released.
    fn unlock(&mut self) -> io::Result<()>;

    /// Test if `lock_exclusive` is called more times than `unlock`.
    fn is_locked(&self) -> bool;
}

pub trait FileReadWrite:
    std::io::Read + std::io::Write + std::io::Seek + FileSync + FileLock + Send
{
}

pub struct FileReaderWriter {
    writer: BufWriter<File>,
    locked: usize,
}

impl FileReaderWriter {
    pub fn new(writer: BufWriter<File>) -> Self {
        Self { writer, locked: 0 }
    }
}

impl Read for FileReaderWriter {
    fn read(&mut self, buf: &mut [u8]) -> std::io::Result<usize> {
        self.writer.get_mut().read(buf)
    }
}

impl Write for FileReaderWriter {
    fn write(&mut self, buf: &[u8]) -> std::io::Result<usize> {
        self.writer.write(buf)
    }

    fn flush(&mut self) -> std::io::Result<()> {
        self.writer.flush()
    }
}

impl Seek for FileReaderWriter {
    fn seek(&mut self, pos: SeekFrom) -> std::io::Result<u64> {
        self.writer.seek(pos)
    }
}

impl FileSync for FileReaderWriter {
    fn sync_all(&mut self) -> Result<(), std::io::Error> {
        self.writer.get_mut().sync_all()
    }
}

impl FileLock for FileReaderWriter {
    fn lock_exclusive(&mut self) -> io::Result<()> {
        if self.locked == 0 {
            self.writer.get_mut().lock_exclusive()?;
        }
        self.locked += 1;
        Ok(())
    }

    fn unlock(&mut self) -> io::Result<()> {
        if self.locked == 1 {
            self.writer.get_mut().unlock()?;
        }
        if self.locked > 0 {
            self.locked -= 1;
        }
        Ok(())
    }

    fn is_locked(&self) -> bool {
        self.locked > 0
    }
}

impl FileReadWrite for FileReaderWriter {}

impl<T> FileSync for Cursor<T> {
    fn sync_all(&mut self) -> Result<(), std::io::Error> {
        Ok(())
    }
}

impl<T> FileReadWrite for Cursor<T>
where
    Cursor<T>: Write,
    T: std::convert::AsRef<[u8]> + Send,
{
}

impl<T> FileLock for Cursor<T> {
    fn lock_exclusive(&mut self) -> io::Result<()> {
        Ok(())
    }

    fn unlock(&mut self) -> io::Result<()> {
        Ok(())
    }

    fn is_locked(&self) -> bool {
        true
    }
}
