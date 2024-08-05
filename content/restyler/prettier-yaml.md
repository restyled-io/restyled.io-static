---
title: prettier-yaml
---

> **Version**: v3.3.3-2

This [Restyler][source] operates on **Yaml**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-prettier:v3.3.3-2
  command: ["prettier-with-tailwindcss", "--write"]
  arguments: []
  include: ["**/*.yml", "**/*.yaml"]
  interpreters: []
```

## Examples

**Before**

```yaml
foo: bar
baz:   bat

```

**After**

```yaml
foo: bar
baz: bat

```


## Documentation

- https://prettier.io/docs/en/
- https://prettier.io/blog/2018/07/29/1.14.0.html

[source]: https://github.com/restyled-io/restylers/blob/main/prettier-yaml/info.yaml
