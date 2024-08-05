---
title: "Git Error: Couldn't find remote ref"
---

## Error Message

```console
fatal: Couldn't find remote ref pull/<number>/head
```

## What It Means

This is a transient issue that Restyled encounters when GitHub has sent us the
webhook about PR `<number>` and we've begun processing, but their Git system has
not yet made the `pull/<number>/head` ref available to clone.

## What You Can Do

Git is an eventually-consistent system, so these things are possible and cannot
be directly fixed -- only worked around. For example, Restyler could rescue this
exception and retry. At this time, we don't have the development resources to
implement such a workaround, but
[patches are most certainly welcome](https://github.com/restyled-io/restyled.io/wiki/Contributing-to-Restyled).
The clone logic currently happens
[here](https://github.com/restyled-io/restyler/blob/241fb0d8b7b13fb95858c5caf70a34b6180b5499/src/Restyler/Setup.hs#L109-L126).
