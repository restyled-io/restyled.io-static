---
title: yapf
---

> **Version**: v0.40.2-1

This [Restyler][source] operates on **Python**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-yapf:v0.40.2-1
  command: ["yapf", "--in-place"]
  arguments: []
  include: ["**/*.py"]
  interpreters: ["python"]
```

## Examples

**Before**

```python
import math, sys;
def example1():
    ####This is a long comment. This should be wrapped to fit within 72 characters.
    some_tuple=(   1,2, 3,'a'  );
    some_variable={'long':'Long code lines should be wrapped within 79 characters.',
    'other':[math.pi, 100,200,300,9876543210,'This is a long string that goes on'],
    'more':{'inner':'This whole logical line should be wrapped.',some_tuple:[1,
    20,300,40000,500000000,60000000000000000]}}
    return (some_tuple, some_variable)

```

**After**

```python
import math, sys


def example1():
    ####This is a long comment. This should be wrapped to fit within 72 characters.
    some_tuple = (1, 2, 3, 'a')
    some_variable = {
        'long':
        'Long code lines should be wrapped within 79 characters.',
        'other': [
            math.pi, 100, 200, 300, 9876543210,
            'This is a long string that goes on'
        ],
        'more': {
            'inner': 'This whole logical line should be wrapped.',
            some_tuple: [1, 20, 300, 40000, 500000000, 60000000000000000]
        }
    }
    return (some_tuple, some_variable)

```


## Documentation

- https://github.com/google/yapf

[source]: https://github.com/restyled-io/restylers/blob/main/yapf/info.yaml
