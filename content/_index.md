# Restyled

Restyled makes it easy to maintain, or transition to, a consistent coding style
across your entire organization by integrating existing auto-formatting tools
directly into your Pull Request process as a GitHub Actions Workflow:

```yaml
# .github/workflows/restyled.yml

name: Restyled

on:
  pull_request:
    types:
      - opened
      - reopened
      - closed
      - synchronize

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  # For non-forks, we will maintain a sibling PR
  restyled:
    if: |
      github.event.action != 'closed' &&
      github.event.pull_request.head.repo.full_name == github.repository
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

      - if: ${{ !cancelled() && steps.restyler.outputs.success == 'true' }}
        uses: peter-evans/create-pull-request@v7
        with:
          base: ${{ steps.restyler.outputs.restyled-base }}
          branch: ${{ steps.restyler.outputs.restyled-head }}
          title: ${{ steps.restyler.outputs.restyled-title }}
          body: ${{ steps.restyler.outputs.restyled-body }}
          labels: "restyled"
          reviewers: ${{ github.event.pull_request.user.login }}
          delete-branch: true

  # For forks, we will only run (and print git-am instructions)
  restyled-fork:
    if: |
      github.event.action != 'closed' &&
      github.event.pull_request.head.repo.full_name != github.repository
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: restyled-io/actions/setup@v4
      - uses: restyled-io/actions/run@v4
        with:
          fail-on-differences: true

  # On closed events clean up any leftover Restyled PRs
  restyled-cleanup:
    if: ${{ github.event.action == 'closed' }}
    runs-on: ubuntu-latest
    steps:
      - uses: restyled-io/actions/setup@v4
      - id: restyler
        uses: restyled-io/actions/run@v4
      - run: gh --repo "$REPO" pr close "$BRANCH" --delete-branch || true
        env:
          REPO: ${{ github.repository }}
          BRANCH: ${{ steps.restyler.outputs.restyled-head }}
          GH_TOKEN: ${{ github.token }}
```

For more details, see [restyled-io/actions][actions].

[actions]: https://github.com/restyled-io/actions

## Features

**Familiar**: By running as a GitHub Actions workflow, we gain all aspects and
features of their robust build system: scheduling, dispatch, reruns, redundant
job cancellation, bigger runners, self-hosting, etc, etc.

**Zero configuration, if you want**: Restyled will run [60 language-appropriate
auto-formatters][restylers] based on which files have changed, without any
configuration from you. But if your project _does_ use an auto-formatter,
configurations such as `.prettierc` will be respected when Restyled runs.

[restylers]: /restylers

**Simple and flexible**: the [`restyle` action itself][actions-run] re-formats
files and commits any changes. That's it. What you do after that is up to you.
Managing a sibling PR is just one option; GitHub actions exist to do all sorts
of things other than that. And Restyled always prints a copy/paste-able `git am`
command to [apply the style-fixing commits directly to a local
checkout][apply-locally].

[actions-run]: https://github.com/restyled-io/actions/tree/main/run#readme
[apply-locally]: /docs/applying-fixes-locally

**Open and extensible**: Restyled is a [collection of distinct and well-isolated
open-source projects][org], each of which are easy to contribute to depending on
what you would like to see happen.

[org]: https://github.com/restyled-io
