---
title: reorder-python-imports
---

> **Version**: v3.13.0

This [Restyler][source] operates on **Python**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-reorder-python-imports:v3.13.0
  command: ["reorder-python-imports", "--exit-zero-even-if-changed"]
  arguments: []
  include: ["**/*.py"]
  interpreters: ["python"]
```

## Examples

**Before**

```python
import os, sys
from argparse import ArgumentParser

from foo import bar
from baz import womp

from crazy import example1

```

**After**

```python
import os
import sys
from argparse import ArgumentParser

from baz import womp
from crazy import example1
from foo import bar

```


## Documentation

- https://github.com/asottile/reorder_python_imports

[source]: https://github.com/restyled-io/restylers/blob/main/reorder-python-imports/info.yaml
