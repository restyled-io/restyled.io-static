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

Commit one of our [examples][actions] as `.github/workflows/restyled.yml` in the
repositories where you want Restyled to run.

[actions]: https://github.com/restyled-io/actions?tab=readme-ov-file#usage-examples

The **Sibling PRs (forks and cleanup)** example is meant to mirror the original
behavior of a hosted installation. If you use that example, you will experience
the following differences:

| Behavior              | Before            | Now               |
| ---                   | ---               | ---               |
| PR Author             | restyled-io       | github-actions    |
| Status avatar         | restyled-io       | github-actions    |
| Status link (success) | Restyled PR       | Restyled Job      |
| Status link           | Restyled Job      | Restyled Job      |
| Manual patching       | `curl\|git am`    | `base64\|git am`  |
