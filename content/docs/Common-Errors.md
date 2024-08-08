---
title: "Common Errors"
---

## Unknown syntactical constructs

```console
ERROR: encountered unknown syntactical constructs:
HsSpliceE{}
```

Brittany (as of v0.11.0.0) doesn't handle Template Haskell (among other things),
and generates the above error when it sees it. The solution is to ignore the
offending files.

```yaml
---
- brittany:
    include:
      - "**/*.hs"
      - "!src/MyBadFile.hs"
```

Alternative, you can disable the offending expression in the Haskell source

```hs
-- brittany-disable-next-binding

someFunction =
  [someQuote|
    someText
  |]

-- brittany-disable-next-binding

someOtherFunction =
  $(someOtherQuote "someText")
```

Note that `disable-next-binding` on works on top-level bindings. Attractive as
it may be, you can't disable a specific binding within a `where` or `let`.

## Restyled keeps removing shebangs

If you edit a
["Stack Script"](https://docs.haskellstack.org/en/stable/GUIDE/#script-interpreter),
you will find that Restyled (through Brittany) **really** wants to strip that
shebang.

This is an open issue: https://github.com/lspitzner/brittany/issues/192

Unfortunately, you must exclude such files via `.restyled.yaml`.

## parse error on input ...

If the HLint restyler fails, and a message like the following is visible:

```console
refactor: (RealSrcSpan SrcSpanOneLine "./src/Something.hs" 12 33 34,"parse error on input \8216@\8217")
CallStack (from HasCallStack):
  error, called at src/Refact/Run.hs:190:22 in main:Refact.Run
```

This is because the module contains
[`TypeApplications`](https://downloads.haskell.org/~ghc/latest/docs/html/users_guide/glasgow_exts.html#extension-TypeApplications),
which `apply-refact` can't handle.

Unfortunately, the only workaround is to [exclude the file from
Restyler](/docs/configuration-reference#pattern).

## Cannot find module '@...'

This happens when you import a module from a 3rd party package that provides
some plugin or shared rules or configuration. Such plugins are not installed in
the environment where Restyled runs `prettier`. You can find the list of
packages we pre-install in the Restyler's
[`package.json`](https://github.com/restyled-io/restylers/blob/main/prettier/package.json).

For security reasons, Restylers are run in a restricted environment. Part of
this restriction is no networking; this means 3rd party tools cannot be
installed on demand and anything your project needs must be repository-local or
come pre-installed in the Restyler image.

We are happy to accept PRs that add popular, project-agnostic packages to the
Restyler image. If you are attempting to use such a package, please open a PR on
[restyled.io/restylers](https://github.com/restyled-io/restylers).

Restyled also supports [custom Restyler
images](/docs/using-a-custom-restyler-image), in which you can install whatever
software you like.

## "prettier-with-tailwindcss": executable file not found in $PATH

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

## Did you intend to specify a full Restyler object...

**TL;DR**: you may have incorrect indentation.

`restylers` values are expected to be a "named override":

```yaml
# Exhibit A
restylers:
  - prettier: # <-- key: the name of a known Restyler
      include: # <-- value: an object overriding some of its properties
        - "**/*.jsx"
```

But we also support fully specifying a `Restyler` directly:

```yaml
# Exhibit B
restylers:
  - name: prettier # <-- element: flat, complete Restyler object
    image: restyled/restyler-prettier
    command: [prettier]
    arguments: [--inplace]
    include: [...]
    # more keys...
```

Normally, this feature is only known to Restyled contributors who may use it to
try out custom Restylers or non-default features not directly supported in the
named-override syntax. The problem is it's **super easy** to accidentally do
this:

```yaml
restylers:
  - prettier:
    include:
      - "**/*.jsx"
```

Notice how you _meant_ to do _Exhibit A_, but this will parse like _Exhibit B_.
The error that results could be confusing because it will talk about `prettier`
being an invalid key for a `Restyler` (it is), when the real problem is that
`include` needs to be shifted over two characters.

The solution is to make sure your indentation is like _Exhibit A_, assuming
that's what you meant.

## Mapping values are not allowed in this context

This error basically means you've started to define an Object (key-values) in a
place where that's not expected or allowed by the Yaml syntax. The most common
reason for this is when you take a configuration naming Restylers as String
names:

```yaml
restylers:
  - brittany
```

And start treating them as the key into a configuration Object,

```yaml
restylers:
  - brittany
      include:
        - "**/*.hs"
        - "!src/BadFile.hs"
```

This is invalid because you've not changed the String name into a key,

```yaml
restylers:
  - brittany: # <- missing ":"
      include:
        - "**/*.hs"
        - "!src/BadFile.hs"
```

If you pay careful attention to the syntax highlighting differences in these two
examples, that can help spot such problems.

---

For more details see the [Configuration Reference](/docs/configuration).

## Restyle Error 128

This means the configured `command` is not available as an executable on `$PATH`
within then restyler image.

There are two common reasons for this:

### 1- We've updated the restyler to use a new command not present in older images

Sometimes we need to create and use new executables as a restyler evolves. We
will then update the current version of our "manifest" to indicate using that as
the default `command`. If you're using an older image that lacks that
executable, you will see this error. The solution is to explicitly configure
`command` to what it was before, when that image was in use.

### 2- You've configured an invalid command yourself

If you've configured `command` for this restyler, that is where the issue is. It
is either misspelled or points to a non-existent, or not-on-`$PATH` executable.
Note that `command` is a list option, to support supplying initial arguments. If
not a list, it's expected to _not_ be setting arguments and is turned into a
single-element list.

```yaml
# This is fine
restylers:
  - prettier:
      command: prettier

# But this is wrong; it's being treated as a single file named `prettier\ --write`
restylers:
  - prettier:
      command: prettier --write

# This is correct
restylers:
  - prettier:
      command:
        - prettier
        - --write

# And so is this
restylers:
  - prettier:
      command: [prettier, --write]
```

## `rustfmt may have failed to format`

Restyled can fail with this error:

```console
error: left behind trailing whitespace
    --> /code/src/lib.rs:1058
     |
1058 |         //
     |           ^

warning: rustfmt may have failed to format. See previous 1 errors.
```

This is an open `rustfmt` bug: https://github.com/rust-lang/rustfmt/issues/2916.

Once `rustfmt` has been fixed, Restyled can update. For now, unfortunately, you
have to either edit the code in a way that doesn't cause this bug, or exclude it
from Restyled via `.restyled.yaml`.

## expected one of ..., or an operator, found keyword `move`

The `rustfmt` Restyler is built to run the 2015 "edition"\*, and constructions
only available in the 2018 edition may cause such syntax errors.

The fix is to specify your edition via `arguments`:

```yaml
restylers:
  - rustfmt:
      arguments:
        - "--edition"
        - "2018"
```

Or by creating a `rustfmt.toml` for the project:

```toml
edition = "2018"
```

**NOTE**: Unfortunately, specifying edition in `Cargo.toml` only effects
invocations of `cargo fmt`, and not direct invocations of `rustfmt` (as the
Restyler must do in order to only restyle changed files).

\*PRs welcome :)

## `FailedToFormat` "failed to download"

```console
       org.scalafmt.cli.FailedToFormat: /code/.scalafmt.conf
       Caused by: org.scalafmt.interfaces.ScalafmtException: [...] failed to download
```

If the version of `scalafmt` doesn't match the `version` key in
`.scalafmt.conf`, it will dynamically download the correct version. This
behavior cannot be disabled. We don't allow restylers to make network requests,
so that attempt fails with the above error.

You can either change your `version` configuration to match our image, or use a
different image that is the correct version through a [Restyler
Override](/docs/configuration#restyler-override). You can see what images
are available on on [Docker
Hub](https://hub.docker.com/r/restyled/restyler-scalafmt/tags?page=1&name=v).

## Restyled keeps removing `ViewPatterns`

See
[jaspervdj/stylish-haskell#75](https://github.com/jaspervdj/stylish-haskell/issues/75)
for details. Most likely, you'll want to disable the `remove_redundant` feature
in your `.stylish-haskell.yaml`.
