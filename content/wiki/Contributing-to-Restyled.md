Restyled is built in the open and community contributions are very much encouraged.

## CLA

When you open your first Pull Request, https://cla-assistant.io/ will post a red status and ask you to sign our CLA.

## Repositories

[**restyled.io**](https://github.com/restyled-io/restyled.io)

This is the source behind https://restyled.io. These are the frontend pagers users interact with, as well as an API used by `agent`s to interact with any stateful data. Its `/webhooks` endpoint is effectively a proxy for enqueuing Jobs that `agent`s then pick up.

[**agent**](https://github.com/restyled-io/agent)

This process runs on each of our "Restyle Machine" instances. It picks Jobs off of the queue and processes them by invoking the `restyler` CLI. It's primary responsibility is coordinate this loop and interact with our API to check plan restrictions and record Job states.

[**restyler**](https://github.com/restyled-io/restyler)

This is the complete process of restyling a single Pull Request encapsulated as a CLI and shipped in a Docker image. This is where to go if you want to change how Pull Request status updates happen, how errors are handled, how the comments look, etc.

Documentation for the restyler codebase can be found [here](http://docs.restyled.io/restyler/). It may or may not be useful, it may or may not be up to date.

[**restylers**](https://github.com/restyled-io/restylers)

This is a collection of `Dockerfile`s and support files that define all our Restylers. This is where you want to go to add or fix an individual restyler. To work in here, you will likely need our [SDK](https://github.com/restyled-io/sdk). See https://github.com/restyled-io/restyled.io/wiki/Adding-a-Restyler.

## Architecture

![restyle-flow](https://github.com/restyled-io/restyled.io/assets/50812/3feb7186-c1f6-448b-b49b-1b80383fa232)

## Getting Help

1. Open an Issue on the repository in question,
1. Join our [Zulip Chat](https://restyled.zulipchat.com) (beware: it's typically very quiet), or
1. [Email Support](mailto:support@restyled.io)

[libera]: https://libera.chat/
