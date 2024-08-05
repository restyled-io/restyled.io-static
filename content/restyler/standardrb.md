---
title: standardrb
---

> **Version**: v1.39.2

This [Restyler][source] operates on **Ruby**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-standardrb:v1.39.2
  command: ["standardrb", "--fix"]
  arguments: []
  include: ["**/*.rb"]
  interpreters: ["ruby"]
```

## Examples

**Before**

```ruby
def some_method
    do_something
end

```

**After**

```ruby
def some_method
  do_something
end

```


## Documentation

- https://github.com/testdouble/standard

[source]: https://github.com/restyled-io/restylers/blob/main/standardrb/info.yaml
