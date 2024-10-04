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

## Differences

The above example workflow attempts to keep behavior as close to the original
Restyled jobs as possible. However, certain parts of the experience will change,
hopefully in unimportant ways.

### Status

Users used to see a `restyled` PR status, with our avatar. The _details_ link
would go to the Restyled Pull Request (or the Job if there is none):

![Restyled App status](/img/hosted-restyled-status.png)

Now, the status will be the same as any other Workflow, with the _details_ link
taking you to that workflow.

![Restyled workflow status](/img/workflow-restyled-status.png)

![Restyled workflow job](/img/restyled-job.png)

{{< note >}}
**NOTE**: opening the Restyled PR still puts an event into the stream of your
original PR, which is the easiest way to navigate to it:
{{< /note >}}

![Restyled PR mention in original PR events](/img/restyled-pr-mention.png)

### Author

Restyled PRs used to be opened by the `restyled-io` app user:

![PR header as created by restyled-io](/img/hosted-author.png)

They're now opened by the `github-actions` bot:

![PR header as created by github-actions](/img/workflow-author.png)

{{< note >}}
**NOTE**: The author of the PR is determined by the `GITHUB_TOKEN` in the
`create-pull-request` step.
{{< /note >}}

### Patch Command

Users used to see a `curl <url> | git am` command in the Job log, and they could
follow that URL to see the full patch as its own web page:

![Restyled App curl-git-am](/img/hosted-curl-git-am.png)

Now, they will see a `base64 | git am << <heredoc>` command and can optionally
expand the full patch directly in logs:

![Restyled workflow base64-git-am](/img/workflow-base64-git-am.png)

### Cleaning up Abandoned Restyles

Before, if you closed the original PR without addressing style, the Restyle PR
was automatically closed. The workflow above does not handle that, but it [can
be extended to do so][readme-cleanup] if desired.

[readme-cleanup]: https://github.com/restyled-io/actions?tab=readme-ov-file#cleaning-up-closed-prs
