---
title: "Restyler Versions"
---

Restyled wraps off-the-shelf auto-formatting tools as transparently as possible. Therefore, the version of the underlying tool has a large impact on the behavior you'll experience using our service. To help this, we offer a few configuration points in your `.restyled.yaml` that affect what versions of things will run on your PRs.

## How It Works

When the Restyler process runs, it fetches a manifest of all known Restylers, we call this a "Restylers set". These sets are named and specified by the `restylers_version` key in your `.restyled.yaml`. By default, everyone gets `stable`.

In the set, each Restyler has [an `image` key][brittany-image] that points to the specific, tagged Docker image to run for that Restyler. These tags are named after the version of the underlying auto-formatter that image will run, so while we may add our own prefixes or suffixes, you should always be able to infer an auto-formatter version from these tags directly.

[brittany-image]: https://github.com/restyled-io/restylers/blob/628cd0cf7a8fd80fe1116c84ea7aceb64c6b904a/restylers.yaml#L32

We are happy to build and push images in all sorts of configurations, and we will (as much as possible) never remove a pushed tag. This means there may be many tags available not present in any versioned set. You can explore what is available for a specific Restyler by viewing [its Docker Hub page][brittany-tags] directly.

[brittany-tags]: https://hub.docker.com/r/restyled/restyler-brittany/tags

**TL;DR**:

- Use `restylers_version` to control the overall set of Restyler versions
- Optionally, use `restylers[$name].image` to specify a specific Restyler version to use
- See [Available Restylers][available-restylers] for appropriate values

[available-restylers]: https://docs.restyled.io/available-restylers/

## Common Use Cases

The following are some common reasons to make use of these configuration points:

### Avoid surprises

In a specific Restyler, you can re-specify its default image:

```yaml
restylers:
  - brittany:
      image:
        tag: v0.11.0.0
```

From then on, regardless of how the default Restylers set changes, this Restyler will always run this image, until you change it.

> **Note**: the above changes only the `tag` field of the image and is equivalent to
>
> ```yaml
> image: restyled/restyler-brittany:v0.11.0.0
> ```
>
> Other available fields are `registry` and `name`.

### Opt in to newer, earlier

Before making updates to `stable`, we release to a different "channel" called `dev`:

```yaml
restylers_version: dev
```

### Opt in to a specific newer, earlier

When/if we're making major updates, we will likely release a Restyler image before making it a part of any released set, and certainly before making it the default. You can opt in to trying it out ahead of time through its `image` key:

```yaml
restylers:
  - brittany:
      image:
        tag: vX.Y.Z-beta
```

### Series Images

Users may want to always run the latest version of some formatter, but don't want to implicitly update to a new major version, as that could break things they're not ready to fix. To support this use-case, Restyled builds and releases so-called "series images".

If a given auto-formatter uses semantic versioning, its Restyler images will have tags matching `vX.Y.Z`. Provided that's the case (true for most, but not all), we will also maintain images tagged `vX` and `vX.Y` as the latest version within that major and major-minor series respectively. Users can then rely on these tags to receive updates as they are released, but not unexpectedly update to a new major (or major-minor) version:

```yaml
restylers:
  - clang-format:
      image:
        tag: v16
```

### Use your own image(s)

One consequence of this system is that whatever you set as a `restylers[$name].image` will be pulled and run as the Restyler. This means you can maintain and use your own images:

```yaml
restylers:
  - brittany:
      image: pbrisbin/restyler-brittany:latest
```

As long as the image is publicly available (and functions properly as a Restyler), this will work. This is a great way to test fixes yourself before submitting PRs.

**NOTE**: Restylers have direct access to the source code they're restyling. While they are run in an isolated working directory and with `--net=none` as safe guards (among other things), you should still fully trust the image you are specifying here.
