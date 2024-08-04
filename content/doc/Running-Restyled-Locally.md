---
title: "Running Restyled Locally"
---

See https://github.com/restyled-io/restyler#readme

<!-- TODO: move this to the above README (and rewrite to make it fit better)
## Caveats

`restyle` will use the `remote_files` stanza of your configuration if present. This may leave extra files in your working directory afterwards.

Restyled, in general, operates on only files changed in a PR and in a fresh clone. This makes it run quickly and avoid many issues related to unexpected or non-source files. If you chose to run (e.g.) `restyle .`, these expectations are not met and that may lead to errors.

You can simulate the behavior of restyling changed files only locally by passing a list from `git diff` to `xargs restyle`. For example,

```console
git diff main..HEAD --name-only | xargs restyle
```
-->