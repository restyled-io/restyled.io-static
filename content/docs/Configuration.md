---
title: "Configuration"
---

<aside id="table-of-contents">
  <ul>
    <li><a href="#general-notes">General notes</a></li>
    <li><a href="#core-configuration">Core Configuration</a></li>
    <li class="sub"><a href="#enabled">Enabled</a></li>
    <li class="sub"><a href="#exclude">Exclude</a></li>
    <li class="sub"><a href="#also-exclude">Also Exclude</a></li>
    <li class="sub"><a href="#remote-files">Remote Files</a></li>
    <li><a href="#restyling-outcomes">Restyling Outcomes</a></li>
    <li class="sub"><a href="#commit-template">Commit Template</a></li>
    <li class="sub"><a href="#ignore-authors">Ignore Authors</a></li>
    <li class="sub"><a href="#ignore-branches">Ignore Branches</a></li>
    <li class="sub"><a href="#ignore-labels">Ignore Labels</a></li>
    <li><a href="#restylers">Restylers</a></li>
    <li class="sub"><a href="#restylers-version">Restylers Version</a></li>
    <li class="sub"><a href="#restylers">Restylers</a></li>
    <li class="sub"><a href="#wildcard">Wildcard</a></li>
    <li class="sub"><a href="#restyler-override">Restyler Override</a></li>
  </ul>
</aside>


The restyling process can be configured through a YAML file committed in your
repository. Restyled will use the first file found at any of the following
locations:

- `.restyled.yaml`
- `.restyled.yml`
- `.github/restyled.yaml`
- `.github/restyled.yml`

The contents of that file are documented here. The current default configuration
is available
[here](https://github.com/restyled-io/restyler/blob/main/config/default.yaml).
Any differences or additional notes in that source file take precedence over
what's described in this wiki page. When referring to the file, we use
`.restyled.yaml` -- but of course this documentation applies regardless of
location.

The `.restyled.yaml` **in the branch being Restyled** is what is used. If you
make a configuration change on another branch (e.g. `main`), you will need to
bring that change into any open Pull Requests (e.g. rebase) before Restyled will
see it there.

## General notes

- All keys are optional and default values begin each section below

## Core Configuration

### Enabled

```yaml
enabled: true
```

Do anything at all?

### Exclude

```yaml
exclude:
  - "**/*.patch"
  - "**/node_modules/**/*"
  - "**/vendor/**/*"
  - ".github/workflows/**/*"
```

Patterns to exclude from all Restylers.

By default, we ignore directories that are often checked-in but rarely represent
project code. Some globs are slightly complicated to match paths within
directories of names appearing at any depth.

This behavior can be disabled in your project with:

```yaml
exclude: []
```

### Also Exclude

If you wish to exclude patterns while retaining our default `exclude`, add them
to `also_exclude` instead.

```yaml
also_exclude: []
```

### Remote files

```yaml
remote_files: []
```

Files to download before restyling.

Example:

```yaml
remote_files:
  - url: https://raw.github.com/.../hlint.yaml
    path: .hlint.yaml
```

If omitted, `path` is the basename of `url`.

## Restyling Outcomes

### Commit Template

```yaml
commit_template: |
  Restyled by ${restyler.name}
```

Control the commit messages used when Restyler makes fixes. Supports limited
interpolation, currently just `${restyler.name}`.

### Ignore Authors

```yaml
ignore_authors:
  - "*[bot]"
```

Authors to ignore, supports globs.

PRs opened by authors whose login matches any patterns will be ignored by
Restyled.

### Ignore Branches

```yaml
ignore_branches:
  - "renovate/*"
```

Branches to ignore, supports globs.

PRs whose head branches match any patterns will be ignored by Restyled.

### Ignore labels

```yaml
ignore_labels:
  - restyled-ignore
```

Labels to ignore, supports globs.

PRs labels match any patterns will be ignored by Restyled.

## Restylers

### Restylers version

```yaml
restylers_version: stable
```

Version of the set of Restylers to run.

This name corresponds to a manifest at (e.g.)
https://docs.restyled.io/data-files/restylers/manifests/stable/restylers.yaml.
Feel free to specify `dev` to get new versions more quickly, but `stable` does
not lag far behind.

### Restylers

```yaml
restylers:
  - "*"
```

Restylers to run, and how

Elements in this list can be specified in one of three forms:

1. A string, which means to run that Restyler with all defaults

   ```yaml
   restylers:
     - prettier
   ```

1. A single key, that is a name, and _override object_ as the value:

   ```yaml
   restylers:
     - prettier:
         include:
           - "**/*.js"
   ```

1. An object with a name key

   ```yaml
   restylers:
     - name: prettier
       include:
         - "**/*.js"
   ```

All three of the above are equivalent. The latter two are useful if you want to
run the same Restyler multiple ways:

```yaml
restylers:
  - name: prettier
    arguments: ["--one-thing"]
    include: ["needs-one-thing/**/*.js"]

  - name: prettier
    arguments: ["--another"]
    include: ["needs-another/**/*.js"]
```

Omitted keys inherit defaults for the Restyler of that name, which can be seen
in [Available Restylers](/restyler/).

Note that the `enabled` key is not inherited. Adding an item to this list,
without specifying `enabled: false`, automatically enables that Restyler.

In string form, prefixing the name with `!` is short-hand for disabling. The
following two configurations are equivalent:

```yaml
restylers:
  - "!astyle" # quoting is required for this
  - astyle:
      enabled: false
```

#### Wildcard

The special value `*` (wildcard) means _all Restylers not configured_. One
wildcard may be placed anywhere in the `restylers` list and remaining Restylers
will be run, with their default values, at that point.

Note that the Restylers added by the `*` entry will not run if they're default
configuration includes `enabled: false`. You must explicitly add such Restylers
for them to run.

Examples:

- Just run all Restylers with default values, i.e. the default configuration
  value

  ```yaml
  restylers:
    - "*"
  ```

- Enable `jdt`, and run all others after

  ```yaml
  restylers:
    - jdt
    - "*"
  ```

- Enable `jdt`, and run it after all others

  ```yaml
  restylers:
    - "*"
    - jdt
  ```

- Ensure `stylish-haskell` runs before `brittany`, and before all others

  ```yaml
  restylers:
    - stylish-haskell
    - brittany
    - "*"
  ```

- Run _only_ `clang-format`

  ```yaml
  restylers:
    - clang-format
  ```

- Run `clang-format`, `astyle`, everything else, then `clang-format` again with
  different options

  ```yaml
  restylers:
    - clang-format
    - astyle
    - "*"
    - clang-format:
        arguments: ["--special"]
        include:
          - "special/**/*.cs"
  ```

- Disable the `astyle` Restyler, maintaining all other defaults

  ```yaml
  restylers:
    - "!astyle"
    - "*"
  ```

#### Restyler Override

Valid keys in the _override object_ are:

- `enabled`: true|false

  Restylers present in the list are considered enabled and those not in the list
  are considered not enabled, however this key is an explicit way to disable a
  Restyler without removing it from the list (e.g. temporarily).

- `arguments`: array of string

  Any additional argument(s) to pass to the restyling command.

- `include`: array of pattern

  Pattern(s) to match files that should be Restyled.

  {{< note >}}
  **NOTE**: these are processed in order, so be careful you don't accidentally
  do something like:

  ```yaml
  - "!/bad-file.hs"
  - "**/*.hs"
  ```

  which says to exclude `bad-file.hs`, then immediately re-includes it via the
  wildcard.
  {{< /note >}}

- `interpreters`: array of interpreters

  Extension-less files will be Restyled if they match interpreter(s) given here.
  Valid values are `sh`, `bash`, `python`, and `ruby`.

- `image`: string|object

  The Docker image to run. Can be anything publicly pull-able. This can be a
  full image, or you can override individual parts.

  ```yaml
  restylers:
    - clang-format:
        image: ghcr.io/my-org/clang-format:edge

    - clang-format:
        # these are the available keys, multiple can be given, all
        # are optional with defaults coming from the manifest
        registry: restyled
        name: restyler-clang-format
        tag: v16.0.1

    - clang-format:
        # equivalent to restyled/restyler-clang-format:v16
        image:
          tag: v16
  ```

  See [Restyler Versions](/docs/restyler-versions#series-images) for more details
  about so-called "series images", such as the `v16` tag shown above.

- `command`: array of string

  The command (and any required argument(s)) to perform the Restyling.
