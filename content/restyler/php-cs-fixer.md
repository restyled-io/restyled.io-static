---
title: php-cs-fixer
---

> **Version**: v3.61.1

This [Restyler][source] operates on **PHP**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-php-cs-fixer:v3.61.1
  command: ["php-cs-fixer", "fix"]
  arguments: []
  include: ["**/*.php"]
  interpreters: []
```

## Examples

**Before**

```php
<?PHP
$this->foo();

```

**After**

```php
<?php

$this->foo();

```


## Documentation

- https://github.com/FriendsOfPHP/PHP-CS-Fixer

[source]: https://github.com/restyled-io/restylers/blob/main/php-cs-fixer/info.yaml
