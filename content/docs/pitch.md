---
title: The Pitch
draft: true
---

It's not particularly contested that working in a code-base with a consistent
style has very real and tangible benefits. These range from personal happiness,
to improved readability and understand-ability, to reduced bugs.

Developers, in my experience, tend to fall into one of two camps on this:

1. These benefits are so important that we should work towards this consistent
   style in any way possible -- including detailed style guides and rigid
   enforcement through code review.
1. These benefits are not worth the very real human tax of endless subjective
   style discussions, nitpicked code review, and ultimately humans being humans
   and ending up with inconsistent style anyway.

For much of my own career it was not possible to unify these camps. You either
cared or you didn't. And if you did care, you would piss off the folks who
didn't -- and vice versa.

However, there has been significant advancement in the auto-formatter space, as
pioneered by `gofmt`. This offers a new stance that I think both camps can rally
behind: just fix it for me.

In this world, you never think about style -- but you also live in a completely
consistent code-base. You type things out and in a flash all the code snaps into
whatever the defined style is for that project. All of the benefit, none of the
work.

(Maybe you're not convinced, maybe you think the auto-formatted style is ugly,
I’d encourage you to try it out for a week or two. As someone from the first
camp, who took pride in knowing and enforcing a consistent style across the
team, the experience of letting go has been delightful.)

**So what's the problem?**

Let's say you jump on this. You've found, selected, and/or configured an
auto-formatter to address style and you expect to never think about it again.

What happens when someone else contributes to this project? Maybe it's open
source, or maybe this is a work project with a large team. Can you expect
everyone on your team to run the same tooling in this area?

Sure, you could put a check in place, but then that author is on their own to
fix the style, potentially manually. It's an unnecessary barrier to
contribution.

What if someone who typically works on the JavaScript side is going to make a
quick backend change, or you're a Haskeller wants to fix a frontend bug? Can
everyone be expected to have this level of local tooling correctly-configured
all the time, for a language they don't typically use?

Of course not. Instead, you'll find your auto-formatter generating huge and
unnecessary diffs in your Pull Requests, because you happened to touch a file
that someone else had authored. You find yourself still constantly dealing with
style, just from another angle -- and worse, the auto-formatter feels at fault.

Restyled takes a complementary approach to whatever editor tooling or git-hooks
you've decided to set up. When any collaborator opens a Pull Request, Restyled
runs any changed files through its known auto-formatters. This process works
regardless of the author's own tooling or familiarity with the language in which
they happen to be working. If you choose the behavior of a sibling Pull Request,
they'll find a things are just fixed for them; all they have to do is merge.

