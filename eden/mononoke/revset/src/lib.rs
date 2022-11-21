/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This software may be used and distributed according to the terms of the
 * GNU General Public License version 2.
 */

use anyhow::Error;
use futures_ext::BoxStream;
use mononoke_types::ChangesetId;

mod setcommon;
pub use setcommon::add_generations_by_bonsai;

mod intersectnodestream;
pub use crate::intersectnodestream::IntersectNodeStream;

mod unionnodestream;
pub use crate::unionnodestream::UnionNodeStream;

mod setdifferencenodestream;
pub use crate::setdifferencenodestream::SetDifferenceNodeStream;

pub mod errors;
pub use crate::errors::ErrorKind;

pub type BonsaiNodeStream = BoxStream<ChangesetId, Error>;

mod validation;
pub use crate::validation::ValidateNodeStream;

mod ancestors;
pub use crate::ancestors::common_ancestors;
pub use crate::ancestors::greatest_common_ancestor;
pub use crate::ancestors::AncestorsNodeStream;

mod ancestorscombinators;
pub use crate::ancestorscombinators::DifferenceOfUnionsOfAncestorsNodeStream;

mod range;
use uniqueheap::UniqueHeap;

pub use crate::range::RangeNodeStream;
pub use crate::test::*;

#[cfg(test)]
mod test {
    pub use ascii;
    pub use fixtures;
    pub use quickcheck;
}
#[cfg(not(test))]
mod test {}
#[cfg(test)]
mod quickchecks;
#[cfg(test)]
mod tests;