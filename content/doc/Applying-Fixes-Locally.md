---
title: "Applying Fixes Locally"
---

When Restyled runs, it captures the style fixing commits it makes by running
`git format-patch <base>`. The patch is then printed in the logs in a
copy/paste-able way:

```console
{ base64 -d - | git am; } <<'EOM'
...
...
...
EOM
```

Will apply Restyled's fixes directly to your local checkout.

This process even preserves all metadata about the commits: timestamp, message,
and Restyled as author.

## FAQ

### Why is this useful?

This feature enables the following workflow:

- A contributor opens a PR
- The Restyled PR status is Red, "differences found"
- Following the status link expands the job logs, showing the `git am` command
- The contributors runs this command and pushes
- The Restyled PR status is now Green

This workflow is available in all scenarios, though it's particularly useful
when Restyled is run on a Fork, where it's
[unable to make sibling PRs](https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-Restyle-PR-not-created#the-original-pr-is-from-a-fork).
Anyone who finds this easier should take advantage!
