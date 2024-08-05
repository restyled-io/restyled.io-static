---
title: hindent
---

> **Version**: v6.1.1

This [Restyler][source] operates on **Haskell**, but it must be explicitly enabled 

## Configuration

```yaml
  image: restyled/restyler-hindent:v6.1.1
  command: ["hindent"]
  arguments: []
  include: ["**/*.hs"]
  interpreters: []
```

## Examples

**Before**

```haskell
example = case x of Just p -> foo bar

```

**After**

```haskell
example =
  case x of
    Just p -> foo bar

```


## Documentation

- https://github.com/commercialhaskell/hindent

[source]: https://github.com/restyled-io/restylers/blob/main/hindent/info.yaml
