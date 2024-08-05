---
title: shfmt
---

> **Version**: v3.4.3

This [Restyler][source] operates on **POSIX sh** and **Bash**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-shfmt:v3.4.3
  command: ["shfmt", "-w"]
  arguments: ["-i", "2", "-ci"]
  include: ["**/*.sh", "**/*.bash"]
  interpreters: ["sh", "bash"]
```

## Examples

**Before**

```bash
#!/bin/sh
if [ 2 -eq 2 ]
    then
        echo "yup"
    fi

```

**After**

```bash
#!/bin/sh
if [ 2 -eq 2 ]; then
  echo "yup"
fi

```


## Documentation

- https://github.com/mvdan/sh#shfmt

[source]: https://github.com/restyled-io/restylers/blob/main/shfmt/info.yaml
