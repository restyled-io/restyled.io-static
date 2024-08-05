---
title: shellharden
---

> **Version**: v4.1.1-3

This [Restyler][source] operates on **POSIX sh** and **Bash**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-shellharden:v4.1.1-3
  command: ["shellharden", "--replace"]
  arguments: []
  include: ["**/*.sh", "**/*.bash"]
  interpreters: ["sh", "bash"]
```

## Examples

**Before**

```bash
#!/bin/sh
x=x
var=`echo $x`

```

**After**

```bash
#!/bin/sh
x=x
var=`echo "$x"`

```


## Documentation

- https://github.com/anordal/shellharden#readme

[source]: https://github.com/restyled-io/restylers/blob/main/shellharden/info.yaml
