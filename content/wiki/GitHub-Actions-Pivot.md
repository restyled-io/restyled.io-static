---
title: "GitHub Actions Pivot"
---

I've recently shipped a number of changes to [`restyled-io/restyler`](https://github.com/restyled-io/restyler) and corresponding [`restyled-io/actions`](https://github.com/restyled-io/actions) to make Restyled's primary use-case be within a [GitHub Actions](https://docs.github.com/en/actions) workflow. I'm encouraging all users to migrate to this approach instead of the GitHub Marketplace App and jobs that run on Restyled-maintained infrastructure. Eventually, I plan to decommission that infrastructure and support only GitHub Actions usage. Restyled will no longer be a source-available business with a free offering and paid features; it will just be an open source project. As such, I will likely re-license it AGPL, stop with the CLA, etc.

## Why

I started Restyled in August of 2017 because I wanted a thing like it to exist. In the past 6 years, I've managed to build an extremely robust and automated architecture that I'm very proud of. This robustness and automation has allowed me to spend time on it when I wanted, but _only_ when I wanted. I'd go months or years without committing anything, then spend a weekend rewriting some huge component to experiment with a new technology. Despite having 72,000+ repositories, with 5,000+ unique owners, running 1,000+ Restyled jobs every day, I still managed to keep the all-in costs to me under $100 per month, and I can count on one hand the number of times I've had to respond to any kind of outage during those 6 years. All the while, I (and [others](https://github.com/restyled-io/restylers/graphs/contributors)) maintained about [60 individual Restylers](https://docs.restyled.io/available-restylers/) through a robust CI/CD process. Paid Restyled usage comes to $60 a month, so I was happy to pay that $40 a month difference for this "hobby" that also provides a service to that many users.

During that time, GitHub Actions was created and has grown massively. It's clear that if I were to do it over, that's what I would've done. For users, implementing via GitHub Actions would mean:

1. We get features like [concurrent build cancellation](https://github.com/restyled-io/restyled.io/issues/277) and [retry](https://github.com/restyled-io/restyler/issues/162) for free
2. Inherit all the effort and support put into the official [`actions/checkout`](https://github.com/actions/checkout) action, instead of [our own clone logic](https://github.com/restyled-io/restyled.io/wiki/Git-Error:-Couldn't-find-remote-ref)
3. Control over [resource constraints](https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-Restyle-Error-137), including going as far as self-hosting
4. Ability to [DRY config](https://github.com/restyled-io/restyler/issues/96) through Shared Workflows
5. Leverage everything the [`peter-evans/create-pull-request`](https://github.com/peter-evans/create-pull-request) action does to avoid issues like [this](https://github.com/restyled-io/restyled.io/wiki/Git-Error:-Couldn't-find-remote-ref), [this](https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-Push-Rejected), [this](https://github.com/restyled-io/restyled.io/wiki/Git-Error:-bad-object), and [this](https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-Labels-or-Ignore-Labels-not-working)
6. Free up complexity budget to tackle [other things](https://github.com/restyled-io/restyler/issues/52), either ourselves or via contributions in completely independent actions
7. [Safety in updates](https://github.com/restyled-io/restyler/issues/91) from the conventional `@v{major}` tagging
8. With no hosting costs to me, Restyled can be available for free without restriction

This effectively closes every open issue and obviates many documented "common error" scenarios. With all of that opportunity, and with yet another email from Heroku about how my Redis add-on is end-of-life and I have to update, I think it's time.

## When

You are able to [convert your projects](https://github.com/restyled-io/actions#readme) away from hosted restyling and to a GitHub Actions workflow right now. How well this works will depend on your specific use-case and change over time as I continue to iterate. I plan to leave things in this state for at least 3 months collecting feedback, particularly from paid users.

| Date | Action | Status |
| --- | --- | -- |
| 2024-07-23 | GHA usage available | :heavy_check_mark: |
| 2024-07-26 | Paid plans no longer available from GitHub marketplace | :heavy_check_mark: |
| 2024-07-30 | Warning visible on restyled.io | :heavy_check_mark: |
| TBD > 3 months | Hosted usage emits an error status to PRs | |
| TBD | Hosted usage stops accepting webhooks | |

## How will this affect me?

If you are a user of Restyled for PRs that are "same origin" (so not from forks). Your experience should be largely the same; you gain all the benefits mentioned above and lose nothing. With a [small GitHub workflow](https://github.com/restyled-io/restyled.io/actions#readme) that runs Restyled, the behavior of fixing style and managing a sibling PR is the same. I encourage users in this group to make the switch as soon as possible.

If you are a user of Restyled for PRs that are forks, you're experience may change. [Forks are difficult for Restyled to handle generally](https://github.com/restyled-io/restyled.io/wiki/Common-Errors:-Restyle-PR-not-created#the-original-pr-is-from-a-fork), and we've landed on a workflow whereby Restyled makes changes and stores a patch file that can be applied by your contributor through a simple `curl|git` command. Doing things through GitHub Actions doesn't give us the best options for storing the patch file. I hope to explore this problem during the "beta" period. Users in this group can hold off, or dive in and help decide our future.

---

To my many users and contributors, thank you! Any questions, please [email](mailto:support@restyled.io).