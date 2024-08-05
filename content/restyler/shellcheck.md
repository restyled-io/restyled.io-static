---
title: shellcheck
---

> **Version**: v0.9.0

This [Restyler][source] operates on **POSIX sh** and **Bash**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-shellcheck:v0.9.0
  command: ["shellcheck-fix"]
  arguments: []
  include: ["**/*.sh", "**/*.bash"]
  interpreters: ["sh", "bash"]
```

## Examples

**Before**

```bash
echo $foo

```

**After**

```bash
echo "$foo"

```

**Before**

```bash
## Example of a broken script.
for f in $(ls *.m3u)
do
  grep -qi hq.*mp3 $f \
    && echo -e 'Playlist $f contains a HQ file in mp3 format'
done

```

**After**

```bash
## Example of a broken script.
for f in $(ls *.m3u)
do
  grep -qi hq.*mp3 "$f" \
    && echo -e 'Playlist $f contains a HQ file in mp3 format'
done

```

**Before**

```bash
if (( $n > 1 )); then
  echo yeah
fi

```

**After**

```bash
if (( $n > 1 )); then
  echo yeah
fi

```

**Before**

```bash
echo "$foo"

```

**After**

```bash
echo "$foo"

```


## Documentation

- https://github.com/koalaman/shellcheck/wiki

[source]: https://github.com/restyled-io/restylers/blob/main/shellcheck/info.yaml
