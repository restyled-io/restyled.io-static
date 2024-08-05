---
title: dotnet-format
---

> **Version**: v5.1.250801

This [Restyler][source] operates on **C#** and **VB.NET**, but it must be explicitly enabled 

## Configuration

```yaml
  image: restyled/restyler-dotnet-format:v5.1.250801
  command: ["dotnet-format-files"]
  arguments: []
  include: ["**/*.cs", "**/*.vb"]
  interpreters: []
```

## Examples

**Before**

```csharp
int formatted_code;
    void    unformatted_code  ;
void formatted_code_again;

```

**After**

```csharp
int formatted_code;
void unformatted_code;
void formatted_code_again;

```

**Before**

```csharp
int formatted_code;
    void    unformatted_code  ;
void formatted_code_again;

```

**After**

```csharp
int formatted_code;
void unformatted_code;
void formatted_code_again;

```


## Documentation

- https://github.com/dotnet/format

[source]: https://github.com/restyled-io/restylers/blob/main/dotnet-format/info.yaml
