---
title: "Common Errors: Prettier"
---

## JavaScript

### Cannot find module '@...'

This happens when you import a module from a 3rd party package that provides
some plugin or shared rules or configuration. Such plugins are not installed in
the environment where Restyled runs `prettier`. You can find the list of
packages we pre-install in the Restyler's
[`package.json`](https://github.com/restyled-io/restylers/blob/main/prettier/package.json).

For security reasons, Restylers are run in a restricted environment. Part of
this restriction is no networking; this means 3rd party tools cannot be
installed on demand and anything your project needs must be repository-local or
come pre-installed in the Restyler image.

#### Potential Fixes

We are happy to accept PRs that add popular, project-agnostic packages to the
Restyler image. If you are attempting to use such a package, please open a PR on
[restyled.io/restylers](https://github.com/restyled-io/restylers).

Restyled also supports
[custom Restyler images](https://github.com/restyled-io/restyled.io/wiki/Using-a-Custom-Restyler-Image),
in which you can install whatever software you like.

### "prettier-with-tailwindcss": executable file not found in $PATH

We recently added a new executable to the `prettier` restyler to support
tailwindcss users. This mean modifying the manifests such that that command is
used. Provided you're using a recent enough `restyled/restyler-prettier` image,
that's all fine.

However, some users may have configured a specific version of that image, for
example:

```yaml
restylers:
  - prettier:
      image: restyled/restyler-prettier:v1.19.1-2
  - "*"
```

That will cause the error because the older images don't have that executable.
To workaround this, configure `command` back to its original value at the time
this older image was in use:

```yaml
restylers:
  - prettier:
      image: restyled/restyler-prettier:v1.19.1-2
      command:
        - prettier
        - --write
  - "*"
```
