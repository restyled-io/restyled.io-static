---
title: "Updating a Restyler"
---

## How do I know what versions are current?

See https://docs.restyled.io/available-restylers/.

## How do I know what versions are available?

See https://hub.docker.com/r/restyled/restyler-{restyler}/tags.

For example: https://hub.docker.com/r/restyled/restyler-scalafmt/tags.

## What do the docker tags mean?

Every build results in a `:{commit-sha}` tag, the latest build on `main` also updates the `:edge` tag.

Our actual released images follow the format: `:v?{version}(-{release})?`:

- May or may not be prefixed by `v`, though we're trying to standardize on it
- `{version}` should match the underlying auto-formatter
- `-{release}` will be added only if we need to change an image within the same auto-formatter version

## When can I expected new versions to become available?

Many of our Restylers are automatically kept up to date by [Renovate](https://github.com/renovatebot/renovate#readme). It's expected that when an auto-formatter in such a Restyler releases a new version, renovate will create and merge a PR within a day. For other Restylers, it's a manual process with no regular cadence or guarantees.

In either case, once an update lands on `main`, it will be released to the `dev` channel immediately. Once a week, we promote `dev` to `stable`.

## How do I flag a Restyler as out-of-date?

You can open an Issue letting us know the Restyler and newly-available version. Bonus points if you warn us about any major or breaking changes.

## Can I help update a Restyler?

This is one of the easiest ways to contribute. Versions are usually specified in an obvious way within the `./{restyler}` sub-directory; a find-and-replace is typically all that's needed. [Adding a Restyler](https://github.com/restyled-io/restyled.io/wiki/Adding-a-Restyler) can provide some general context.