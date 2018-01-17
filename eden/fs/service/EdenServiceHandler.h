/*
 *  Copyright (c) 2016-present, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 *
 */
#pragma once

#include "common/fb303/cpp/FacebookBase2.h"
#include "eden/fs/service/gen-cpp2/StreamingEdenService.h"
#include "eden/fs/utils/PathFuncs.h"

namespace folly {
template <typename T>
class Future;
}

namespace facebook {
namespace eden {

class Hash;
class EdenMount;
class EdenServer;
class TreeInode;

/*
 * Handler for the EdenService thrift interface
 */
class EdenServiceHandler : virtual public StreamingEdenServiceSvIf,
                           public facebook::fb303::FacebookBase2 {
 public:
  explicit EdenServiceHandler(EdenServer* server);

  EdenServiceHandler(EdenServiceHandler const&) = delete;
  EdenServiceHandler& operator=(EdenServiceHandler const&) = delete;

  facebook::fb303::cpp2::fb_status getStatus() override;

  void mount(std::unique_ptr<MountInfo> info) override;

  void unmount(std::unique_ptr<std::string> mountPoint) override;

  void listMounts(std::vector<MountInfo>& results) override;

  void checkOutRevision(
      std::vector<CheckoutConflict>& results,
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<std::string> hash,
      CheckoutMode checkoutMode) override;

  void resetParentCommits(
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<WorkingDirectoryParents> parents) override;

  void getBindMounts(
      std::vector<std::string>& out,
      std::unique_ptr<std::string> mountPoint) override;

  void getSHA1(
      std::vector<SHA1Result>& out,
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<std::vector<std::string>> paths) override;

  void getCurrentJournalPosition(
      JournalPosition& out,
      std::unique_ptr<std::string> mountPoint) override;

  void getFilesChangedSince(
      FileDelta& out,
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<JournalPosition> fromPosition) override;

  void getFileInformation(
      std::vector<FileInformationOrError>& out,
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<std::vector<std::string>> paths) override;

  void glob(
      std::vector<std::string>& out,
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<std::vector<std::string>> globs) override;

  void async_tm_subscribe(
      std::unique_ptr<apache::thrift::StreamingHandlerCallback<
          std::unique_ptr<JournalPosition>>> callback,
      std::unique_ptr<std::string> mountPoint) override;

  void getManifestEntry(
      ManifestEntry& out,
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<std::string> relativePath) override;

  folly::Future<std::unique_ptr<ScmStatus>> future_getScmStatus(
      std::unique_ptr<std::string> mountPoint,
      bool listIgnored) override;

  folly::Future<std::unique_ptr<ScmStatus>> future_getScmStatusBetweenRevisions(
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<std::string> oldHash,
      std::unique_ptr<std::string> newHash) override;

  void debugGetScmTree(
      std::vector<ScmTreeEntry>& entries,
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<std::string> id,
      bool localStoreOnly) override;

  void debugGetScmBlob(
      std::string& data,
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<std::string> id,
      bool localStoreOnly) override;

  void debugGetScmBlobMetadata(
      ScmBlobMetadata& metadata,
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<std::string> id,
      bool localStoreOnly) override;

  void debugInodeStatus(
      std::vector<TreeInodeDebugInfo>& inodeInfo,
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<std::string> path) override;

  void debugGetInodePath(
      InodePathDebugInfo& inodePath,
      std::unique_ptr<std::string> mountPoint,
      int64_t inodeNumber) override;

  void debugSetLogLevel(
      SetLogLevelResult& result,
      std::unique_ptr<std::string> category,
      std::unique_ptr<std::string> level) override;

  int64_t unloadInodeForPath(
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<std::string> path,
      std::unique_ptr<TimeSpec> age) override;

  void flushStatsNow() override;

  void invalidateKernelInodeCache(
      std::unique_ptr<std::string> mountPoint,
      std::unique_ptr<std::string> path) override;

  void getStatInfo(InternalStats& result) override;

  /**
   * When this Thrift handler is notified to shutdown, it notifies the
   * EdenServer to shut down, as well.
   */
  void shutdown() override;

 private:
  folly::Future<Hash> getSHA1ForPath(
      folly::StringPiece mountPoint,
      folly::StringPiece path);

  folly::Future<Hash> getSHA1ForPathDefensively(
      folly::StringPiece mountPoint,
      folly::StringPiece path) noexcept;

  /**
   * If `filename` exists in the manifest as a file (not a directory), returns
   * the mode of the file as recorded in the manifest.
   */
  folly::Optional<mode_t> isInManifestAsFile(
      const EdenMount* mount,
      const RelativePathPiece filename);

  EdenServer* const server_;
};
} // namespace eden
} // namespace facebook
