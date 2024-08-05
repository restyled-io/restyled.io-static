---
title: jdt
---

> **Version**: v2.13.0

This [Restyler][source] operates on **Java**, **JavaScript***, **CSS**, **HTML**, **JSON** and **XML**, but it must be explicitly enabled 

## Configuration

```yaml
  image: restyled/restyler-jdt:v2.13.0
  command: ["formatter"]
  arguments: []
  include: ["**/*.java", "**/*.css", "**/*.html", "**/*.json", "**/*.xml"]
  interpreters: []
```

## Examples

**Before**

```java
public class ShouldFormat1 {
int Foo(bool isBar) {
        if (isBar) {
            bar();
            return 1;
        } else
            return 0;
    }
}

```

**After**

```java
public class ShouldFormat1 {
    int Foo(bool isBar) {
        if (isBar) {
            bar();
            return 1;
        } else
            return 0;
    }
}

```

**Before**

```java
public class ShouldFormat2 {
    int Foo(bool isBar) {

        if (isBar) {

            bar();

            return 1;
   } else

            return 0;
    }}

```

**After**

```java
public class ShouldFormat2 {
    int Foo(bool isBar) {

        if (isBar) {

            bar();

            return 1;
        } else

            return 0;
    }
}

```


## Documentation

- https://code.revelc.net/formatter-maven-plugin/

[source]: https://github.com/restyled-io/restylers/blob/main/jdt/info.yaml
