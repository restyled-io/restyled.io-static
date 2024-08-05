---
title: pg_format
---

> **Version**: v5.3

This [Restyler][source] operates on **PSQL**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-pg_format:v5.3
  command: ["pg_format", "--inplace"]
  arguments: []
  include: ["**/*.sql"]
  interpreters: []
```

## Examples

**Before**

```postgresql
SELECT * from
students
WHERE students.age > 10;

```

**After**

```postgresql
SELECT
    *
FROM
    students
WHERE
    students.age > 10;


```


## Documentation

- https://github.com/darold/pgFormatter#readme

[source]: https://github.com/restyled-io/restylers/blob/main/pg_format/info.yaml
