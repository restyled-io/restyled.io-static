---
title: brittany
---

> **Version**: v0.14.0.2

This [Restyler][source] operates on **Haskell**, but it must be explicitly enabled 

## Configuration

```yaml
  image: restyled/restyler-brittany:v0.14.0.2
  command: ["brittany", "--write-mode=inplace"]
  arguments: []
  include: ["**/*.hs"]
  interpreters: []
```

## Examples

**Before**

```haskell
func (MyLongFoo abc def) = 1
func (Bar a d) = 2
func _ = 3

```

**After**

```haskell
func (MyLongFoo abc def) = 1
func (Bar       a   d  ) = 2
func _                   = 3

```


## Documentation

- https://github.com/lspitzner/brittany
- https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-Brittany

[source]: https://github.com/restyled-io/restylers/blob/main/brittany/info.yaml
