---
title: prettier
---

> **Version**: v3.3.3-2

This [Restyler][source] operates on **JavaScript**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-prettier:v3.3.3-2
  command: ["prettier-with-tailwindcss", "--write"]
  arguments: []
  include: ["**/*.js", "**/*.jsx"]
  interpreters: []
```

## Examples

**Before**

```javascript
matrix(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
)

```

**After**

```javascript
matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);

```

**Before**

```javascript
matrix(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
)

```

**After**

```javascript
matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);

```


## Documentation

- https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-Prettier
- https://prettier.io/docs/en/

[source]: https://github.com/restyled-io/restylers/blob/main/prettier/info.yaml
