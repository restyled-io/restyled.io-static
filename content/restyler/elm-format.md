---
title: elm-format
---

> **Version**: v0.6.1-alpha-3

This [Restyler][source] operates on **Elm**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-elm-format:v0.6.1-alpha-3
  command: ["elm-format", "--yes"]
  arguments: []
  include: ["**/*.elm"]
  interpreters: []
```

## Examples

**Before**

```elm
homeDirectory = "/root/files"
eval boolean = case boolean of
    Literal bool -> bool
    Not b        -> not (eval b)
    And b b_     -> eval b && eval b_
    Or b b_      -> eval b   || eval b_

```

**After**

```elm
module Main exposing (eval, homeDirectory)


homeDirectory =
    "/root/files"


eval boolean =
    case boolean of
        Literal bool ->
            bool

        Not b ->
            not (eval b)

        And b b_ ->
            eval b && eval b_

        Or b b_ ->
            eval b || eval b_

```


## Documentation

- https://github.com/avh4/elm-format

[source]: https://github.com/restyled-io/restylers/blob/main/elm-format/info.yaml
