---
title: taplo
---

> **Version**: 0.9.3

This [Restyler][source] operates on **TOML**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-taplo:0.9.3
  command: ["taplo", "fmt"]
  arguments: []
  include: ["**/*.toml"]
  interpreters: []
```

## Examples

**Before**

```toml
var   = true
list = [
  'hi',
    'there'
  , 'now'
 ]

```

**After**

```toml
var = true
list = ['hi', 'there', 'now']

```

**Before**

```toml
long_list = [ 'hi', 'there' , 'now' , 'now' , 'now' , 'now' , 'now'
  , 'now'
  , 'now'
  , 'now'
  , 'now'
  , 'now'
  , 'now'
  , 'now'
 ]

```

**After**

```toml
long_list = [
  'hi',
  'there',
  'now',
  'now',
  'now',
  'now',
  'now',
  'now',
  'now',
  'now',
  'now',
  'now',
  'now',
  'now',
]

```


## Documentation

- https://taplo.tamasfe.dev/cli/usage/formatting.html

[source]: https://github.com/restyled-io/restylers/blob/main/taplo/info.yaml
