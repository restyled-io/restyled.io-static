---
title: Migrating to GitHub Actions
---

## Uninstall the GitHub App

1. **For users**, navigate to _Settings > Applications > Installed GitHub Apps_
1. **For orgs**, navigate to _Settings > GitHub Apps > Installed GitHub Apps_
1. Click _Configure_ on the `Restyled.io` App
1. Click _Uninstall_

For more details, see [here](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps#navigating-to-the-github-app-you-want-to-review-or-modify).

## Add a Restyled Workflow

Commit one of our [examples][action] as `.github/workflows/restyled.yml` in the
repositories where you want Restyled to run.

[actions]: https://github.com/restyled-io/actions?tab=readme-ov-file#usage-examples

## Differences

The _Sibling PRs (forks and cleanup)_ example is the closed we have to the
original behavior of a hosted installation. If you use that example, you will
experience the following differences:

### Status

**Before**: a `restyled` PR status, with our avatar. The _details_ link would go
to the Restyled Pull Request (or the Job if there is none):

![Restyled App status](/img/hosted-restyled-status.png)

**Now**: the status will be the same as any other Workflow, with the _details_
link taking you to that workflow.

![Restyled workflow status](/img/workflow-restyled-status.png)

### Author

**Before**: Restyled PRs were opened by `restyled-io[bot]`:

![PR header as created by restyled-io](/img/hosted-author.png)

**Now**: they're now opened by `github-actions[bot]`:

![PR header as created by github-actions](/img/workflow-author.png)

### Patch Command

**Before**: users saw a `curl <url> | git am` command in the Job log, and they
could follow that URL to see the full patch as its own web page:

![Restyled App curl-git-am](/img/hosted-curl-git-am.png)

**Now**: there is a `base64 | git am` command that can be copied and pasted, or
the `patch` output can be used in additional steps, e.g. to upload it as an
artifact to be downloaded and applied similarly to the original `curl|git`
command.

![Restyled workflow base64-git-am](/img/workflow-base64-git-am.png)
