---
title: hlint
---

> **Version**: v3.5

This [Restyler][source] operates on **Haskell**, but it must be explicitly enabled 

## Configuration

```yaml
  image: restyled/restyler-hlint:v3.5
  command: ["hlint", "--refactor", "--refactor-options=-i"]
  arguments: []
  include: ["**/*.hs"]
  interpreters: []
```

## Examples

**Before**

```haskell
main :: IO ()
main = putStrLn $ "hello hlint"

```

**After**

```haskell
main :: IO ()
main = putStrLn "hello hlint"

```


## Documentation

- https://github.com/ndmitchell/hlint#readme
- https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-HLint

[source]: https://github.com/restyled-io/restylers/blob/main/hlint/info.yaml
