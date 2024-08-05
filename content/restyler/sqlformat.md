---
title: sqlformat
---

> **Version**: 0.5.1

This [Restyler][source] operates on **SQL** and **PSQL**, but it must be explicitly enabled 

## Configuration

```yaml
  image: restyled/restyler-sqlformat:0.5.1
  command: ["sqlformat", "--reindent", "--keywords=upper"]
  arguments: []
  include: ["**/*.sql"]
  interpreters: []
```

## Examples

**Before**

```sql
-- hi there
select * from students WHERE students.age > 10;

```

**After**

```sql
-- hi there

SELECT *
FROM students
WHERE students.age > 10;

```

**Before**

```sql
INSERT
  INTO x VALUES ()

```

**After**

```sql
INSERT INTO x
VALUES ()

```


## Documentation

- https://github.com/andialbrecht/sqlparse#readme

[source]: https://github.com/restyled-io/restylers/blob/main/sqlformat/info.yaml
