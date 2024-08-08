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
