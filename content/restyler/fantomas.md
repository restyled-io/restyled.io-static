---
title: fantomas
---

> **Version**: v3.3.0

This [Restyler][source] operates on **F#**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-fantomas:v3.3.0
  command: ["fantomas"]
  arguments: []
  include: ["**/*.fs", "**/*.fsi", "**/*.fsx"]
  interpreters: []
```

## Examples

**Before**

```fsharp
type Type
    = TyLam of Type * Type
    | TyVar of string
    | TyCon of string * Type list
    with override this.ToString () =
            match this with
            | TyLam (t1, t2) -> sprintf "(%s -> %s)" (t1.ToString()) (t2.ToString())
            | TyVar a -> a
            | TyCon (s, ts) -> s

```

**After**

```fsharp
type Type =
    | TyLam of Type * Type
    | TyVar of string
    | TyCon of string * Type list
    override this.ToString() =
        match this with
        | TyLam(t1, t2) -> sprintf "(%s -> %s)" (t1.ToString()) (t2.ToString())
        | TyVar a -> a
        | TyCon(s, ts) -> s

```

**Before**

```fsharp
let Multiple9x9 () =
    for i in 1 .. 9 do
        printf "\n";
        for j in 1 .. 9 do
            let k = i * j in
            printf "%d x %d = %2d " i j k;
        done;
    done;;
Multiple9x9 ();;

```

**After**

```fsharp
let Multiple9x9() =
    for i in 1 .. 9 do
        printf "\n"
        for j in 1 .. 9 do
            let k = i * j
            printf "%d x %d = %2d " i j k

Multiple9x9()

```


## Documentation

- https://github.com/fsprojects/fantomas

[source]: https://github.com/restyled-io/restylers/blob/main/fantomas/info.yaml
