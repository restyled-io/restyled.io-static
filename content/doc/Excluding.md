---
title: "Excluding"
---

Restyled has two mechanisms for excluding files or folders:

- Globally, via [`exclude`](/doc/configuring-restyled#exclude).

  Paths that match patterns listed here will be immediately ignored as early has
  possible. Do try to keep the default patterns, rather than replace them, as
  some of them are important to ensure proper functionality.

- Per Restyler, via `include` in a [Restyler
  Override](/doc/configuring-restyled#restyler-override).

  Paths are only restyled by a Restyler if they match its `include` patterns.
  Negated patterns can be used to exclude things.

  The patterns are matched in order, so be careful about excluding something and
  then immediately re-including it.

  ```yaml
  # Incorrect, the second pattern will take precedence
  include:
    - "!**/*.tmp"
    - "**/*"

  # Correct, everything is included and then the negated pattern applies after
  include:
    - "**/*"
    - "!**/*.tmp"
  ```
