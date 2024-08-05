---
title: ormolu
---

> **Version**: v0.5.3.0

This [Restyler][source] operates on **Haskell**, but it must be explicitly enabled 

## Configuration

```yaml
  image: restyled/restyler-ormolu:v0.5.3.0
  command: ["ormolu", "--mode", "inplace"]
  arguments: []
  include: ["**/*.hs"]
  interpreters: []
```

## Examples

**Before**

```haskell
foo
 :: MonadIO m
 -> Text -> Text
 -> SqlPersistT m ()
 foo = undefined

```

**After**

```haskell
foo ::
  MonadIO m ->
  Text ->
  Text ->
  SqlPersistT
    m
    ()
    foo = undefined

```


## Documentation

- https://github.com/tweag/ormolu#readme

[source]: https://github.com/restyled-io/restylers/blob/main/ormolu/info.yaml
