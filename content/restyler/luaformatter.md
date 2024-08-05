---
title: luaformatter
---

> **Version**: v1.3.6

This [Restyler][source] operates on **Lua**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-luaformatter:v1.3.6
  command: ["lua-format", "--in-place"]
  arguments: []
  include: ["**/*.lua"]
  interpreters: ["lua"]
```

## Examples

**Before**

```lua
matrix = { {1, 0, 0, 0},
   {1, 1, 0,   0},
   {1, 1,  1, 0},
   {1, 1, 1, 1} }

```

**After**

```lua
matrix = {{1, 0, 0, 0}, {1, 1, 0, 0}, {1, 1, 1, 0}, {1, 1, 1, 1}}

```


## Documentation

- https://github.com/Koihik/LuaFormatter

[source]: https://github.com/restyled-io/restylers/blob/main/luaformatter/info.yaml
