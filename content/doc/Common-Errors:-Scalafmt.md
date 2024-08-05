---
title: "Common Errors: Scalafmt"
---

## `FailedToFormat` "failed to download"

```console
       org.scalafmt.cli.FailedToFormat: /code/.scalafmt.conf
       Caused by: org.scalafmt.interfaces.ScalafmtException: [...] failed to download
```

If the version of `scalafmt` doesn't match the `version` key in `.scalafmt.conf`, it will dynamically download the correct version. This behavior cannot be disabled. We don't allow restylers to make network requests, so that attempt fails with the above error.

You can either change your `version` configuration to match our image, or use a different image that is the correct version through a [Restyler Override](https://github.com/restyled-io/restyled.io/wiki/Configuring-Restyled#restyler-override). You can see what images are available on on [Docker Hub](https://hub.docker.com/r/restyled/restyler-scalafmt/tags?page=1&name=v).
