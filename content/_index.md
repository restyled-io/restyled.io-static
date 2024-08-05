# Restyled

**Style is important**. Any time there's more than one way to do something in
code, inconsistencies will creep in. Besides measurably adding to the time it
takes to read and comprehend code, inconsistent style across a code base can
hide bugs, often [very][bumblebee] [bad][steam] [ones][apple].

[bumblebee]: https://github.com/MrMEEE/bumblebee-Old-and-abbandoned/issues/123
[steam]: https://github.com/ValveSoftware/steam-for-linux/issues/3671"
[apple]:
  htps://nakedsecurity.sophos.com/2014/02/24/anatomy-of-a-goto-fail-apples-ssl-bug-explained-plus-an-unofficial-patch/

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
      - uses: actions/checkout
        with:
          ref: ${{ github.event.pull_request.head.ref }}

      # Install and run the Restyled CLI, failing on differences
      - uses: restyled-io/actions/setup
      - id: restyler
        uses: restyled-io/actions/run
        with:
          fail-on-differences: true

      # Maintain a sibling PR of the style fixes
      - if: ${{ !cancelled() }}
        uses: peter-evans/create-pull-request
        with:
          base: ${{ restyler.outputs.restyled-base }}
          branch: ${{ restyler.outputs.restyled-head }}
          title: ${{ restyler.outputs.restyled-title }}
          body: ${{ restyler.outputs.restyled-body }}
```

---

Open a Pull Request that changes files in one of our [many, many supported
languages][available-restylers]. If it doesn't conform to your preferred style,
a status check will fail and point to another Pull Request where it's been
_restyled_:

[available-restylers]: https://docs.restyled.io/available-restylers/

![](https://restyled.io/static/img/docs/differences-status.png)

Click through to see what tools corrected your style:

![](https://restyled.io/static/img/docs/minor-details.png)

Review the differences:

![](https://restyled.io/static/img/docs/minor-differences.png)

And, if you like, merge them back into yours.

![](https://restyled.io/static/img/docs/merge-button.png)

Rejoice in your consistent style and green status!

![](https://restyled.io/static/img/docs/minor-success.png)
