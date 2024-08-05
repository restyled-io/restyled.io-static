**Style is important**. Any time there's more than one way to do something in
code, inconsistencies will creep in. Besides measurably adding to the time it
takes to read and comprehend code, inconsistent style across a code base can
hide bugs, often [very][bumblebee] [bad][steam] [ones][apple].

[bumblebee]: https://github.com/MrMEEE/bumblebee-Old-and-abbandoned/issues/123
[steam]: https://github.com/ValveSoftware/steam-for-linux/issues/3671
[apple]: https://www.synopsys.com/blogs/software-security/understanding-apple-goto-fail-vulnerability-2.html

Great tools exist for almost every language to automatically align code to a
defined style. Through editor integrations or git pre-commit hooks, a single
developer can give themselves a great work-flow for automatically dealing with
style. Doing this across a team, on the other hand, can be challenging.

Restyled makes it easy to maintain, or transition to, a consistent coding style
across your entire organization by integrating directly into your existing Pull
Request process as a GitHub Action.

## Getting Started

Add the file `.github/workflows/restyled.yml` to your repository:

```yaml
name: Restyled

on:
  pull_request:

jobs:
  restyled:
    runs-on: ubuntu-latest
    steps:
      # Checkout the PR's branch
      - uses: actions/checkout@v4
        with:
          ref: ${{ github.event.pull_request.head.ref }}

      # Install and run the Restyled CLI, failing on differences
      - uses: restyled-io/actions/setup@v3
      - id: restyler
        uses: restyled-io/actions/run@v3
        with:
          fail-on-differences: true

      # Maintain a sibling PR of the style fixes
      - if: ${{ !cancelled() }}
        uses: peter-evans/create-pull-request@v6
        with:
          base: ${{ steps.restyler.outputs.restyled-base }}
          branch: ${{ steps.restyler.outputs.restyled-head }}
          title: ${{ steps.restyler.outputs.restyled-title }}
          body: ${{ steps.restyler.outputs.restyled-body }}
```
