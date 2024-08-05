---
title: pyment
---

> **Version**: v0.3.3

This [Restyler][source] operates on **Python**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-pyment:v0.3.3
  command: ["pyment", "-w"]
  arguments: []
  include: ["**/*.py"]
  interpreters: ["python"]
```

## Examples

**Before**

```python
def func(param1=True, param2: str = 'default val'):
  '''Description of func with docstring groups style.

  Params:
      param1 - descr of param1 that has True for default value.
      param2 - descr of param2

  Returns:
      some value

  Raises:
      keyError: raises key exception
      TypeError: raises type exception

  '''
  pass

class A:
    def method(self, param1, param2=None) -> int:
        pass

```

**After**

```python
def func(param1=True, param2: str = 'default val'):
    """Description of func with docstring groups style.

    :param param1: descr of param1 that has True for default value
    :param param2: descr of param2
    :param param2: str:  (Default value = 'default val')
    :returns: some value
    :raises keyError: raises key exception
    :raises TypeError: raises type exception

    """
  pass

class A:
    """ """
    def method(self, param1, param2=None) -> int:
        """

        :param param1: 
        :param param2:  (Default value = None)

        """
        pass

```

**Before**

```python
def func(param1=True, param2: str = 'default val'):
  '''Description of func with docstring groups style.

  Params:
      param1 - descr of param1 that has True for default value.
      param2 - descr of param2

  Returns:
      some value

  Raises:
      keyError: raises key exception
      TypeError: raises type exception

  '''
  pass

class A:
    def method(self, param1, param2=None) -> int:
        pass

```

**After**

```python
def func(param1=True, param2: str = 'default val'):
    """Description of func with docstring groups style.

    :param param1: descr of param1 that has True for default value
    :param param2: descr of param2
    :param param2: str:  (Default value = 'default val')
    :returns: some value
    :raises keyError: raises key exception
    :raises TypeError: raises type exception

    """
  pass

class A:
    """ """
    def method(self, param1, param2=None) -> int:
        """

        :param param1: 
        :param param2:  (Default value = None)

        """
        pass

```


## Documentation

- https://github.com/dadadel/pyment

[source]: https://github.com/restyled-io/restylers/blob/main/pyment/info.yaml
