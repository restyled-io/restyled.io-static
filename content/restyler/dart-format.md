---
title: dart-format
---

> **Version**: v2.3.4

This [Restyler][source] operates on **Dart**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-dart-format:v2.3.4
  command: ["dart", "format"]
  arguments: []
  include: ["**/*.dart"]
  interpreters: []
```

## Examples

**Before**

```dart
void example() {
  if (tag=='style'||tag=='script'&&(type==null||type == TYPE_JS
        ||type==TYPE_DART)||
    tag=='link'&&(rel=='stylesheet'||rel=='import')) {}
}

```

**After**

```dart
void example() {
  if (tag == 'style' ||
      tag == 'script' &&
          (type == null || type == TYPE_JS || type == TYPE_DART) ||
      tag == 'link' && (rel == 'stylesheet' || rel == 'import')) {}
}

```


## Documentation

- https://pub.dev/packages/dart_style

[source]: https://github.com/restyled-io/restylers/blob/main/dart-format/info.yaml
