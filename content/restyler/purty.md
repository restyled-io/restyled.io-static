---
title: purty
---

> **Version**: v7.0.0

This [Restyler][source] operates on **PureScript**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-purty:v7.0.0
  command: ["purty", "--write"]
  arguments: []
  include: ["**/*.purs"]
  interpreters: []
```

## Examples

**Before**

```purescript
module Ado where

foo = ado
  let w = 0
  x <- pure 1
  y <- do
    pure 2
    pure 2
  z <- do pure 3
  in w + x + y + z

bar = ado in 12

```

**After**

```purescript
module Ado where

foo = ado
  let
    w = 0
  x <- pure 1
  y <- do
    pure 2
    pure 2
  z <- do pure 3
  in w + x + y + z

bar = ado in 12

```


## Documentation

- https://github.com/joneshf/purty#readme

[source]: https://github.com/restyled-io/restylers/blob/main/purty/info.yaml
