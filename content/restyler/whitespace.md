---
title: whitespace
---

> **Version**: v0.2.0.0

This [Restyler][source] operates on *****, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-whitespace:v0.2.0.0
  command: ["whitespace"]
  arguments: []
  include: ["**/*", "!**/*.gif", "!**/*.ico", "!**/*.jpeg", "!**/*.jpg", "!**/*.pdf", "!**/*.png", "!**/fonts/**/*"]
  interpreters: []
```

## Examples

**Before**

```console
line one  
line two 
  
line three \
line four

```

**After**

```console
line one
line two

line three \
line four

```

**Before**

```console
line one
line two

line three



```

**After**

```console
line one
line two

line three

```

**Before**

```console
line one
line two

line three
```

**After**

```console
line one
line two

line three

```

**Before**

```console
line one
line two
line three

```

**After**

```console
line one
line two
line three

```


## Documentation

- https://github.com/restyled-io/restyler-whitespace/blob/master/README.md

[source]: https://github.com/restyled-io/restylers/blob/main/whitespace/info.yaml
