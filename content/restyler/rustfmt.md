---
title: rustfmt
---

> **Version**: v1.7.0-stable

This [Restyler][source] operates on **Rust**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-rustfmt:v1.7.0-stable
  command: ["rustfmt"]
  arguments: []
  include: ["**/*.rs"]
  interpreters: []
```

## Examples

**Before**

```rust
// Attributes should be on their own lines
struct CRepr {
    x: f32,y: f32,
}

```

**After**

```rust
// Attributes should be on their own lines
struct CRepr {
    x: f32,
    y: f32,
}

```


## Documentation

- https://github.com/rust-lang-nursery/rustfmt#readme
- https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-Rustfmt

[source]: https://github.com/restyled-io/restylers/blob/main/rustfmt/info.yaml
