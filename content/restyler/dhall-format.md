---
title: dhall-format
---

> **Version**: 1.41.2

This [Restyler][source] operates on **Dhall**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-dhall-format:1.41.2
  command: ["dhall"]
  arguments: ["format", "--inplace"]
  include: ["**/*.dhall"]
  interpreters: []
```

## Examples

**Before**

```console
let Fruit_ = < Apple : {} | Banana : {} | Orange : {} >
in let fruiteHandler_ =
            { Apple = \(_ : {}) -> "Apple"
            , Banana = \(_ : {}) -> "Banana"
            , Orange = \(_ : {}) -> "Orange"
            }
        in let f = { Fruit = Fruit_, fruitToText = \(f : Fruit_) -> merge fruiteHandler_ f }
        in let x = { fruit1 = f.fruitToText (f.Fruit.Apple {=}), fruit2 = f.fruitToText (f.Fruit.Banana {=}) }
        in x // { fruit1 = f.fruitToText (f.Fruit.Orange {=}) }

```

**After**

```console
let Fruit_ = < Apple : {} | Banana : {} | Orange : {} >

in  let fruiteHandler_ =
          { Apple = \(_ : {}) -> "Apple"
          , Banana = \(_ : {}) -> "Banana"
          , Orange = \(_ : {}) -> "Orange"
          }

    in  let f =
              { Fruit = Fruit_
              , fruitToText = \(f : Fruit_) -> merge fruiteHandler_ f
              }

        in  let x =
                  { fruit1 = f.fruitToText (f.Fruit.Apple {=})
                  , fruit2 = f.fruitToText (f.Fruit.Banana {=})
                  }

            in  x // { fruit1 = f.fruitToText (f.Fruit.Orange {=}) }

```


## Documentation

- https://docs.dhall-lang.org

[source]: https://github.com/restyled-io/restylers/blob/main/dhall-format/info.yaml
