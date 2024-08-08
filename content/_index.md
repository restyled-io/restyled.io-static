# Restyled

Restyled makes it easy to maintain, or transition to, a consistent coding style
across your entire organization by integrating existing auto-formatting tools
directly into your existing Pull Request process as a GitHub Action:

```yaml
# .github/workflows/restyled.yml

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
      - if: ${{ !cancelled() && steps.restyler.outputs.success == 'true' }}
        uses: peter-evans/create-pull-request@v6
        with:
          base: ${{ steps.restyler.outputs.restyled-base }}
          branch: ${{ steps.restyler.outputs.restyled-head }}
          title: ${{ steps.restyler.outputs.restyled-title }}
          body: ${{ steps.restyler.outputs.restyled-body }}
```

## Features

**Familiar**: By running as a GitHub Actions workflow, we gain all aspects and
features of their robust build system: scheduling, dispatch, reruns, redundant
job cancellation, bigger runners, self-hosting, etc, etc.

**Zero configuration, if you want**: Restyled will run [60 language-appropriate
auto-formatters][restylers] based on which files have changed, without any
configuration from you. But if your project _does_ use an auto-formatter,
configurations such as `.prettierc` will be respected when Restyled runs.

**Simple and flexible**: the [`restyle` action itself][actions-run] re-formats
files and commits any changes. That's it. What you do after that is up to you.
Managing a sibling PR is just one option; GitHub actions exist to do all sorts
of things other than that. And Restyled always prints a copy/paste-able `git am`
command to [apply the style-fixing commits directly to a local
checkout][apply-locally].

**Extensible**: Restyled is a [collection of distinct and well-isolated
open-source projects][org], each of which are easy to contribute to depending on
what you would like to see happen.

[restylers]: /restylers
[actions-run]: https://github.com/restyled-io/actions/tree/main/run#readme
[apply-locally]: /docs/applying-fixes-locally
[org]: https://github.com/restyled-io
