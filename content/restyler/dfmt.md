---
title: dfmt
---

> **Version**: v0.14.2

This [Restyler][source] operates on **D**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-dfmt:v0.14.2
  command: ["dfmt", "--inplace"]
  arguments: []
  include: ["**/*.d"]
  interpreters: []
```

## Examples

**Before**

```d
void main(string[] args) {
    bool optionOne, optionTwo, optionThree;
    getopt(args,
        "optionOne", &optionOne,
        "optionTwo", &optionTwo,
        "optionThree", &optionThree);
}

```

**After**

```d
void main(string[] args)
{
    bool optionOne, optionTwo, optionThree;
    getopt(args, "optionOne", &optionOne, "optionTwo", &optionTwo, "optionThree", &optionThree);
}

```


## Documentation

- https://github.com/dlang-community/dfmt#readme

[source]: https://github.com/restyled-io/restylers/blob/main/dfmt/info.yaml
