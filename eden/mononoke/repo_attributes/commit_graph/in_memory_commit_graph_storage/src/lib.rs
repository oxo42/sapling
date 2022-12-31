/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This software may be used and distributed according to the terms of the
 * GNU General Public License version 2.
 */

use std::collections::BTreeMap;
use std::collections::HashMap;

use anyhow::Result;
use async_trait::async_trait;
use commit_graph::edges::ChangesetEdges;
use commit_graph::storage::CommitGraphStorage;
use context::CoreContext;
use mononoke_types::ChangesetId;
use mononoke_types::ChangesetIdPrefix;
use mononoke_types::ChangesetIdsResolvedFromPrefix;
use mononoke_types::Generation;
use mononoke_types::RepositoryId;
use parking_lot::RwLock;

/// In-memory commit graph storage.
pub struct InMemoryCommitGraphStorage {
    repo_id: RepositoryId,
    changesets: RwLock<BTreeMap<ChangesetId, ChangesetEdges>>,
}

impl InMemoryCommitGraphStorage {
    pub fn new(repo_id: RepositoryId) -> Self {
        InMemoryCommitGraphStorage {
            repo_id,
            changesets: Default::default(),
        }
    }
}

#[async_trait]
impl CommitGraphStorage for InMemoryCommitGraphStorage {
    fn repo_id(&self) -> RepositoryId {
        self.repo_id
    }

    async fn add(&self, _ctx: &CoreContext, edges: ChangesetEdges) -> Result<bool> {
        let cs_id = edges.node.cs_id;
        Ok(self.changesets.write().insert(cs_id, edges).is_none())
    }

    async fn fetch_edges(
        &self,
        _ctx: &CoreContext,
        cs_id: ChangesetId,
    ) -> Result<Option<ChangesetEdges>> {
        Ok(self.changesets.read().get(&cs_id).cloned())
    }

    async fn fetch_many_edges(
        &self,
        _ctx: &CoreContext,
        cs_ids: &[ChangesetId],
        _prefetch_hint: Option<Generation>,
    ) -> Result<HashMap<ChangesetId, ChangesetEdges>> {
        let mut result = HashMap::with_capacity(cs_ids.len());
        let changesets = self.changesets.read();
        for cs_id in cs_ids {
            if let Some(edges) = changesets.get(cs_id) {
                result.insert(*cs_id, edges.clone());
            }
        }
        Ok(result)
    }

    async fn find_by_prefix(
        &self,
        _ctx: &CoreContext,
        cs_prefix: ChangesetIdPrefix,
        limit: usize,
    ) -> Result<ChangesetIdsResolvedFromPrefix> {
        let changesets = self.changesets.read();
        let (min, max) = (cs_prefix.min_bound(), cs_prefix.max_bound());
        let matches: Vec<_> = changesets
            .range(min..=max)
            .take(limit)
            .map(|(cs_id, _)| *cs_id)
            .collect();
        match matches.as_slice() {
            [] => Ok(ChangesetIdsResolvedFromPrefix::NoMatch),
            [cs_id] => Ok(ChangesetIdsResolvedFromPrefix::Single(*cs_id)),
            [.., cs_id] if changesets.range(*cs_id..=max).nth(2).is_none() => {
                Ok(ChangesetIdsResolvedFromPrefix::Multiple(matches))
            }
            _ => Ok(ChangesetIdsResolvedFromPrefix::TooMany(matches)),
        }
    }
}

#[cfg(test)]
mod tests {
    use std::sync::Arc;

    use commit_graph_testlib::*;
    use context::CoreContext;
    use fbinit::FacebookInit;

    use super::*;

    #[fbinit::test]
    pub async fn test_in_memory_storage_store_and_fetch(fb: FacebookInit) -> Result<()> {
        let ctx = CoreContext::test_mock(fb);
        let storage = Arc::new(InMemoryCommitGraphStorage::new(RepositoryId::new(1)));

        test_storage_store_and_fetch(&ctx, storage).await
    }

    #[fbinit::test]
    pub async fn test_in_memory_skip_tree(fb: FacebookInit) -> Result<()> {
        let ctx = CoreContext::test_mock(fb);
        let storage = Arc::new(InMemoryCommitGraphStorage::new(RepositoryId::new(1)));

        test_skip_tree(&ctx, storage).await
    }

    #[fbinit::test]
    pub async fn test_in_memory_p1_linear_tree(fb: FacebookInit) -> Result<()> {
        let ctx = CoreContext::test_mock(fb);
        let storage = Arc::new(InMemoryCommitGraphStorage::new(RepositoryId::new(1)));

        test_p1_linear_tree(&ctx, storage).await
    }

    #[fbinit::test]
    pub async fn test_in_memory_get_ancestors_difference(fb: FacebookInit) -> Result<()> {
        let ctx = CoreContext::test_mock(fb);
        let storage = Arc::new(InMemoryCommitGraphStorage::new(RepositoryId::new(1)));

        test_get_ancestors_difference(&ctx, storage).await
    }

    #[fbinit::test]
    pub async fn test_in_memory_find_by_prefix(fb: FacebookInit) -> Result<()> {
        let ctx = CoreContext::test_mock(fb);
        let storage = Arc::new(InMemoryCommitGraphStorage::new(RepositoryId::new(1)));

        test_find_by_prefix(&ctx, storage).await
    }
}
