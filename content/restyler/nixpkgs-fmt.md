---
title: nixpkgs-fmt
---

> **Version**: v1.3.0

This [Restyler][source] operates on **Nix**, but it must be explicitly enabled 

## Configuration

```yaml
  image: restyled/restyler-nixpkgs-fmt:v1.3.0
  command: ["nixpkgs-fmt"]
  arguments: []
  include: ["**/*.nix"]
  interpreters: []
```

## Examples

**Before**

```nix
{foo,bar}:
        foo+bar

```

**After**

```nix
{ foo, bar }:
foo + bar

```


## Documentation

- https://github.com/nix-community/nixpkgs-fmt#readme

[source]: https://github.com/restyled-io/restylers/blob/main/nixpkgs-fmt/info.yaml
