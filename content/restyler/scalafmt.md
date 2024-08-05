---
title: scalafmt
---

> **Version**: v3.7.10

This [Restyler][source] operates on **Scala**, but it must be explicitly enabled 

## Configuration

```yaml
  image: restyled/restyler-scalafmt:v3.7.10
  command: ["scalafmt", "--non-interactive"]
  arguments: []
  include: ["**/*.scala"]
  interpreters: []
```

## Examples

**Before**

```scala
object a {
  def c(b: List[Int]): List[Int] =
    for {
      a <- b
      if ((a))
    } yield a
}

```

**After**

```scala
object a {
  def c(b: List[Int]): List[Int] =
    for {
      a <- b
      if a
    } yield a
}

```


## Documentation

- https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-Scalafmt
- https://scalameta.org/scalafmt/

[source]: https://github.com/restyled-io/restylers/blob/main/scalafmt/info.yaml
