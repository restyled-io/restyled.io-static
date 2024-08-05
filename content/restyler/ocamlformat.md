---
title: ocamlformat
---

> **Version**: v0.26.2

This [Restyler][source] operates on **OCaml**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-ocamlformat:v0.26.2
  command: ["ocamlformat", "--inplace"]
  arguments: []
  include: ["**/*.ml"]
  interpreters: []
```

## Examples

**Before**

```ocaml
let sum_of_squares num =
  num + 1
  |> List.range 0 |> List.map ~f:square
  |> List.fold_left ~init:0 ~f:( + )

```

**After**

```ocaml
let sum_of_squares num =
  num + 1 |> List.range 0 |> List.map ~f:square
  |> List.fold_left ~init:0 ~f:( + )

```


## Documentation

- https://github.com/ocaml-ppx/ocamlformat

[source]: https://github.com/restyled-io/restylers/blob/main/ocamlformat/info.yaml
