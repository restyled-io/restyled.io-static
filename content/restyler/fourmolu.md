---
title: fourmolu
---

> **Version**: v0.13.0.0

This [Restyler][source] operates on **Haskell**, but it must be explicitly enabled 

## Configuration

```yaml
  image: restyled/restyler-fourmolu:v0.13.0.0
  command: ["fourmolu", "--mode", "inplace"]
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

- https://fourmolu.github.io/
- https://github.com/fourmolu/fourmolu

[source]: https://github.com/restyled-io/restylers/blob/main/fourmolu/info.yaml
