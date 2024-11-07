# Restyled

Restyled makes it easy to maintain, or transition to, a consistent coding style
across your entire organization by integrating existing auto-formatting tools
directly into your Pull Request process as a GitHub Actions Workflow

## Restyled is...

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

To get started, see the [Examples][actions].

[actions]: https://github.com/restyled-io/actions?tab=readme-ov-file#usage-examples
