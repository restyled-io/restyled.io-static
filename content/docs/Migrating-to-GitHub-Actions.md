---
title: Migrating to GitHub Actions
---

## Uninstall the GitHub App

1. Navigate to _Settings > Applications > Installed GitHub Apps_ (for a user) or
   _Settings > GitHub Apps > Installed GitHub Apps_ (for an organization)
1. Click _Configure_ on the `Restyled.io` App
1. Click _Uninstall_

For more details, see [here](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps#navigating-to-the-github-app-you-want-to-review-or-modify).

## Add a Restyled Workflow

Commit the following file in your repositories:

```yaml
# .github/workflows/restyled.yml

name: Restyled

on:
  pull_request:

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  restyled:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          ref: ${{ github.event.pull_request.head.ref }}

      - uses: restyled-io/actions/setup@v4
      - id: restyler
        uses: restyled-io/actions/run@v4
        with:
          fail-on-differences: true

      - if: |
          !cancelled() &&
          steps.restyler.outputs.success == 'true' &&
          github.event.pull_request.head.repo.full_name == github.repository
        uses: peter-evans/create-pull-request@v6
        with:
          base: ${{ steps.restyler.outputs.restyled-base }}
          branch: ${{ steps.restyler.outputs.restyled-head }}
          title: ${{ steps.restyler.outputs.restyled-title }}
          body: ${{ steps.restyler.outputs.restyled-body }}
          labels: "restyled"
          reviewers: ${{ github.event.pull_request.user.login }}
          delete-branch: true
```

For more details, see [here](https://github.com/restyled-io/actions#readme).
