The general syntax of a configuration error is:

```
We had trouble with your configuration:
Error in <location>: <message>.
```

## Location

The `location` string is a (perhaps cryptic) attempt at telling you where the error was encountered:

- `<location>[<index>]` means the element at index `<index>` of an array located at `<location>`
- `<location>[<name>]` means the `<name>` key of an object located at `<location>`
- Depending on the error, the above may also appear as `<location>.<name>`
- `$` means the top-level document

Working backwards, `$.restylers[0]` would mean the **0th element** of the **`restylers` key** in the **top-level document**. For example:

```yaml
                      # <-- top-level document
restylers:            # <-- restylers key
  - stylish_haskell:  # <-- 0th element
      include:
        - "**/*.hs"
  - brittany
```

And a similar error may use `$['restylers'][0]` for that location.

## Messages

The following is a non-exhaustive list of error message you may see, as well as potential causes and solutions.

### Did you intend to specify a full Restyler object...

**TL;DR**: you may have incorrect indentation.

`restylers` values are expected to be a "named override":

```yaml
# Exhibit A
restylers:
  - prettier:           # <-- key: the name of a known Restyler
      include:          # <-- value: an object overriding some of its properties
        - "**/*.jsx"
```

But we also support fully specifying a `Restyler` directly:

```yaml
# Exhibit B
restylers:
  - name: prettier                       # <-- element: flat, complete Restyler object
    image: restyled/restyler-prettier
    command: [prettier]
    arguments: [--inplace]
    include: [...]
    # more keys...
```

Normally, this feature is only known to Restyled contributors who may use it to try out custom Restylers or non-default features not directly supported in the named-override syntax. The problem is it's **super easy** to accidentally do this:

```yaml
restylers:
  - prettier:
    include:
      - "**/*.jsx"
```

Notice how you *meant* to do _Exhibit A_, but this will parse like _Exhibit B_. The error that results could be confusing because it will talk about `prettier` being an invalid key for a `Restyler` (it is), when the real problem is that `include` needs to be shifted over two characters.

The solution is to make sure your indentation is like _Exhibit A_, assuming that's what you meant.

### Mapping values are not allowed in this context

This error basically means you've started to define an Object (key-values) in a place where that's not expected or allowed by the Yaml syntax. The most common reason for this is when you take a configuration naming Restylers as String names:

```yaml
restylers:
  - brittany
```

And start treating them as the key into a configuration Object,

```yaml
restylers:
  - brittany
      include:
        - "**/*.hs"
        - "!src/BadFile.hs"
```

This is invalid because you've not changed the String name into a key,

```yaml
restylers:
  - brittany:  # <- missing ":"
      include:
        - "**/*.hs"
        - "!src/BadFile.hs"
```

If you pay careful attention to the syntax highlighting differences in these two examples, that can help spot such problems.

---

For more details see the [Configuration Reference](https://github.com/restyled-io/restyled.io/wiki/Configuring-Restyled).