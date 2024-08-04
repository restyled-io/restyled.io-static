## Error Message

```
fatal: bad object <sha>
```

```
readCreateProcess: git "diff" "--name-only" "<sha>" (exit 128): failed error=...
```

## What It Means

This is a transient issue that Restyled encounters when the state of the git repository we clone is not up to date with the details we received from the GitHub API about the Pull Request. Specifically, the GitHub API may tell us the head sha is `x`, but then when we clone the `refs/pull/:number/head` reference, we get an older sha `y`. When we eventually check to see if we've made any changes by running `git diff --name-only x`, it fails because `x` does not exist in our copy of the repository.

The edge-case seems to be encountered most often with force-pushes and forks, though it can conceptually occur any time.

## What You Can Do

Git is an eventually-consistent system, so these things are possible and cannot be directly fixed -- only worked around. For example Restyler could check that the checked-out sha matches what the API response said it should be and, if not, delay and retry. At this time, we don't have the development resources to implement such a workaround, but [patches are most certainly welcome](https://github.com/restyled-io/restyled.io/wiki/Contributing-to-Restyled).