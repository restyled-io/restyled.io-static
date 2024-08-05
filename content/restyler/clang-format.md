---
title: clang-format
---

> **Version**: v18.1.8

This [Restyler][source] operates on **C**, **C++**, **Java**, **JavaScript**, **Objective-C**, **Protobuf** and **C#**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-clang-format:v18.1.8
  command: ["clang-format", "-i"]
  arguments: []
  include: ["**/*.c", "**/*.cc", "**/*.cpp", "**/*.cxx", "**/*.c++", "**/*.C", "**/*.cs", "**/*.h", "**/*.hh", "**/*.hpp", "**/*.hxx", "**/*.h++", "**/*.H", "**/*.java", "**/*.js", "**/*.m"]
  interpreters: []
```

## Examples

**Before**

```c
int formatted_code;
    void    unformatted_code  ;
void formatted_code_again;

```

**After**

```c
int formatted_code;
void unformatted_code;
void formatted_code_again;

```


## Documentation

- https://clang.llvm.org/docs/ClangFormat.html

[source]: https://github.com/restyled-io/restylers/blob/main/clang-format/info.yaml
