---
title: google-java-format
---

> **Version**: v1.9

This [Restyler][source] operates on **Java**, but it must be explicitly enabled 

## Configuration

```yaml
  image: restyled/restyler-google-java-format:v1.9
  command: ["google-java-format", "--replace"]
  arguments: []
  include: ["**/*.java"]
  interpreters: []
```

## Examples

**Before**

```java
private enum Answer {
  YES { @Override public String toString() { return "yes";
    }
  }, NO,
  MAYBE
}

```

**After**

```java
private enum Answer {
  YES {
    @Override
    public String toString() {
      return "yes";
    }
  },
  NO,
  MAYBE
}

```


## Documentation

- https://github.com/google/google-java-format#readme

[source]: https://github.com/restyled-io/restylers/blob/main/google-java-format/info.yaml
