---
title: "GitHub Actions Pivot"
date: 2024-07-01
---

I've recently shipped a number of changes to
[`restyled-io/restyler`](https://github.com/restyled-io/restyler) and
corresponding [`restyled-io/actions`](https://github.com/restyled-io/actions) to
make Restyled's primary use-case be within a [GitHub
Actions](https://docs.github.com/en/actions) workflow. I'm encouraging all users
to migrate to this approach instead of the GitHub Marketplace App and jobs that
run on Restyled-maintained infrastructure. Eventually, I plan to decommission
that infrastructure and support only GitHub Actions usage. Restyled will no
longer be a source-available business with a free offering and paid features; it
will just be an open source project. As such, I will likely re-license it AGPL,
stop with the CLA, etc.

## Why

I started Restyled in August of 2017 because I wanted a thing like it to exist.
In the ensuing 6 years, I managed to build an extremely robust and automated
architecture that I'm very proud of. This robustness and automation allowed me
to spend time on it when I wanted, but _only_ when I wanted. I'd go months or
years without committing anything, then spend a weekend rewriting some huge
component to experiment with a new technology. Despite having 72,000+
repositories, with 5,000+ unique owners, running 1,000+ Restyled jobs every day,
I still managed to keep the all-in costs to me under $100 per month, and I can
count on one hand the number of times I had to respond to any kind of "outage".
All the while, I (with [some
help](https://github.com/restyled-io/restylers/graphs/contributors)) maintained
about [60 individual Restylers](https://docs.restyled.io/available-restylers/)
through a robust CI/CD process. Paid Restyled usage fluctuated around $30-60 a
month, so I was happy to pay the difference for this "hobby" that also provided
a service to that many users.

During that time, GitHub Actions was created and grew massively. It's clear that
if I were to do it over, that's what I would've done. GitHub Actions would've
given us all of the following:

1. Features like [concurrent build cancellation](https://github.com/restyled-io/restyled.io/issues/277) and [retry](https://github.com/restyled-io/restyler/issues/162) for free
2. An official [`actions/checkout`](https://github.com/actions/checkout) action, instead of [our own clone logic](https://github.com/restyled-io/restyled.io/wiki/Git-Error:-Couldn't-find-remote-ref)
3. Control over [resource constraints](https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-Restyle-Error-137), including the option to self-host
4. Ability to [DRY config](https://github.com/restyled-io/restyler/issues/96) through Shared Workflows
5. The [`peter-evans/create-pull-request`](https://github.com/peter-evans/create-pull-request) action, which avoids issues like [this](https://github.com/restyled-io/restyled.io/wiki/Git-Error:-Couldn't-find-remote-ref), [this](https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-Push-Rejected), [this](https://github.com/restyled-io/restyled.io/wiki/Git-Error:-bad-object), and [this](https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-Labels-or-Ignore-Labels-not-working)
6. A freed-up complexity budget to tackle [other things](https://github.com/restyled-io/restyler/issues/52), either ourselves or via contributions in completely independent actions
7. [Safety in updates](https://github.com/restyled-io/restyler/issues/91) from the conventional `@v{major}` tagging
8. No hosting costs to me, meaning Restyled can be available for free without restriction

This effectively closes every open issue and obviates many documented "common
error" scenarios. With all of that opportunity, and with yet another email from
Heroku about how my Redis add-on is end-of-life and I have to update, I think
it's time.

## When

You are able to [convert your projects][migrating] away from hosted restyling
and to a GitHub Actions workflow right now. How well this works will depend on
your specific use-case and change over time as I continue to iterate. I plan to
leave things in this state for at least 3 months collecting feedback,
particularly from paid users.

| Date | Action | Status |
| --- | --- | -- |
| 2024-07-23 | GHA usage available | ✔ |
| 2024-07-26 | Paid plans no longer available from GitHub marketplace | ✔ |
| 2024-07-30 | Warning visible on restyled.io | ✔ |
| 2024-11-01 | Hosted usage emits an error status to PRs | |
| TBD | Hosted usage stops accepting webhooks | |

## What do I do?

Head over to the [migration guide][migrating] for instructions, and a
description of what will be different post-migration.

---

To my many users and contributors, thank you! Any questions, please
[email](mailto:support@restyled.io).

[migrating]: https://github.com/restyled-io/actions/wiki/Migrating-from-the-Restyled-App
