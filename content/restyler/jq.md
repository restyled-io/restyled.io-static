---
title: jq
---

> **Version**: v1.6-3

This [Restyler][source] operates on **JSON**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-jq:v1.6-3
  command: ["jq-write"]
  arguments: []
  include: ["**/*.json"]
  interpreters: []
```

## Examples

**Before**

```json
{
   "foo": "bar"
   , "baz":
 "bat" }

```

**After**

```json
{
  "foo": "bar",
  "baz": "bat"
}

```


## Documentation

- https://stedolan.github.io/jq/

[source]: https://github.com/restyled-io/restylers/blob/main/jq/info.yaml
