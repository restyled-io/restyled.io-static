---
title: prettier-json
---

> **Version**: v3.3.3-2

This [Restyler][source] operates on **JSON**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-prettier:v3.3.3-2
  command: ["prettier-with-tailwindcss", "--write"]
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

- https://prettier.io/docs/en/options.html#parser

[source]: https://github.com/restyled-io/restylers/blob/main/prettier-json/info.yaml
