---
title: gn
---

> **Version**: v2

This [Restyler][source] operates on **GN**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-gn:v2
  command: ["gn", "format"]
  arguments: []
  include: ["**/*.gn", "**/*.gni"]
  interpreters: []
```

## Examples

**Before**

```console
sources = ["b", "a"]

```

**After**

```console
sources = [
  "a",
  "b",
]

```


## Documentation

- https://gn.googlesource.com/gn/+/master/docs/reference.md#cmd_format

[source]: https://github.com/restyled-io/restylers/blob/main/gn/info.yaml
