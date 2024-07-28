<main>
  <h1>Restyled</h1>
  <p>Nudge your team towards consistent coding style with every PR</p>
</main>

**Style is important**. Any time there's more than one way to do something in
code, inconsistencies will creep in. Besides measurably adding to the time it
takes to read and comprehend code, inconsistent style across a code base can
hide bugs, often [very][bumblebee] [bad][steam] [ones][apple].

[bumblebee]: https://github.com/MrMEEE/bumblebee-Old-and-abbandoned/issues/123
[steam]: https://github.com/ValveSoftware/steam-for-linux/issues/3671"
[apple]: htps://nakedsecurity.sophos.com/2014/02/24/anatomy-of-a-goto-fail-apples-ssl-bug-explained-plus-an-unofficial-patch/

Great tools exist for almost every language to automatically align code to a
defined style. Through editor integrations or git pre-commit hooks, a single
developer can give themselves a great work-flow for automatically dealing with
style. Doing this across a team, on the other hand, can be challenging.

Restyled makes it easy to maintain, or transition to, a consistent coding style
across your entire organization by integrating directly into your existing Pull
Request process.

## How it works

Add a GitHub Actions Workflow:

```yaml
name: Restyled

on:
  pull_request:

concurrency:

jobs:
```

Open a Pull Request that changes files in one of our [many, many supported
languages][available-restylers]. If it doesn't conform to your preferred style,
a status check will fail and point to another Pull Request where it's been
_restyled_:

[available-restylers]: https://docs.restyled.io/available-restylers/

![](https://restyled.io/static/img/docs/differences-status.png)

<div class="how-it-works-highlight">
<p>Click through to see what tools corrected your style:</p>
<p>
  <img src="https://restyled.io/static/img/docs/minor-details.png" />
</p>
<p>Review the differences:</p>
<p>
  <img
    src="https://restyled.io/static/img/docs/minor-differences.png"
  />
</p>
<p>And, if you like, merge them back into yours.</p>
<p>
  <img src="https://restyled.io/static/img/docs/merge-button.png" />
</p>
</div>

Rejoice in your consistent style and green status!

![](https://restyled.io/static/img/docs/minor-success.png)

## TODO: Getting Started
