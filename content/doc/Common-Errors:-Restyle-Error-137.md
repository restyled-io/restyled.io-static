---
title: "Common Errors: Restyle Error 137"
---

When a Job errors stating, "[w]e had trouble with the ... restyler", and:

> Exited non-zero (137) for the following paths

This means the restyler container was killed by the Docker daemon for exhausting some limited resource, usually memory.

## Details


## Reproducing

The following command can be used to run restyler locally, with the memory limits in place:

```console
docker run -it --rm \
  --env DEBUG=1 \
  --env HOST_DIRECTORY="$PWD" \
  --env UNRESTRICTED="" \
  --volume "$PWD":/code \
  --volume /tmp:/tmp \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --entrypoint restyle-path \
  "restyled/restyler:edge" <file...>
```

If this doesn't produce the same 137 error, it's possible we have an underlying infrastructure problem; please [open an Issue](https://github.com/restyled-io/restyler/issues/new).

## Large number of files

If the tool consumes too much memory when invoked with many files, you could reduce the number of files:

1. Exclude things

   Do you have any generated, vendor, or temporary files being restyled? [Exclude them](https://github.com/restyled-io/restyled.io/wiki/Excluding).

2. Make smaller PRs

   This is generally good practice, your reviewers may appreciate it anyway.

3. Skip larger PRs

   You can reduce [`changed_paths.maximum`](https://github.com/restyled-io/restyled.io/wiki/Configuring-Restyled#changed-paths) to below the number of files that seems to encounter this error and set `changed_paths.outcome` to `skip`. Note that this will cause the PR to be skipped entirely (not just the problematic restyler).
 
## Large file

If the tool consumes too much memory when invoked on a single file, presumably due to its size, you should [exclude it](https://github.com/restyled-io/restyled.io/wiki/Excluding).

## Coding Bug

Restylers typically do nothing besides invoke an underlying auto-formatter executable with options and a list of files to operate on. Therefore, memory consumption should be a function of that upstream tool (that we do not author). Therefore, if you believe the auto-formatter has a bug that is causing it to use more memory than expected, you should report that bug with them. Our error messages usually contain links to the upstream project, where bugs can be reported.

If you think there is a bug in how we execute the auto-formatter, which is causing the high memory consumption, please do open an Issue providing as much evidence as possible.

## Workarounds

You could [disable](https://github.com/restyled-io/restyled.io/wiki/Configuring-Restyled#enabled) the problematic restyler as part of your PR, merge it, then re-enable it after. If you want to include any style fixes from this restyler, you could [run it locally](https://github.com/restyled-io/restyled.io/wiki/Running-Restyled-Locally).