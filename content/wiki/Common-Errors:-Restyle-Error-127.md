This means the configured `command` is not available as an executable on `$PATH` within then restyler image.

There are two common reasons for this:

### 1- We've updated the restyler to use a new command not present in older images

Sometimes we need to create and use new executables as a restyler evolves. We will then update the current version of our "manifest" to indicate using that as the default `command`. If you're using an older image that lacks that executable, you will see this error. The solution is to explicitly configure `command` to what it was before, when that image was in use.

[The prettier restyler recently went through this](https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-Prettier#prettier-with-tailwindcss-executable-file-not-found-in-path).

### 2- You've configured an invalid command yourself

If you've configured `command` for this restyler, that is where the issue is. It is either misspelled or points to a non-existent, or not-on-`$PATH` executable. Note that `command` is a list option, to support supplying initial arguments. If not a list, it's expected to _not_ be setting arguments and is turned into a single-element list.

```yaml
# This is fine
restylers:
  - prettier:
      command: prettier

# But this is wrong; it's being treated as a single file named `prettier\ --write`
restylers:
  - prettier:
      command: prettier --write

# This is correct
restylers:
  - prettier:
      command:
        - prettier
        - --write

# And so is this
restylers:
  - prettier:
      command: [prettier, --write]
```