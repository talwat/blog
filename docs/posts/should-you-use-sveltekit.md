---
title: "Should you use sveltekit?"
date: "9/25/2022"
desc: "Should you use sveltekit for your next application?"
longDesc: "Should you use sveltekit as your meta-framework for your next programming project? The Pro's and Con's of using sveltekit as your meta-framework."
tags:
    - svelte
    - sveltekit
    - vite
    - js
    - blog
    - site
---

## What is sveltekit?

[SvelteKit](https://kit.svelte.dev/) is a meta-framework _(essentially a framework you use for routing, building, SSR, SEO, etc...)_ for svelte.
It enables you to do a bunch of things you couldn't do with just svelte. Things like routing and SSR.

It was created by the same team who made svelte itself, and uses [vite](https://vitejs.dev/) under the hood.

SvelteKit is essentially just a vite plugin which adds a lot of extra functionality.

## Sveltekit's state right now

As of now, SvelteKit is in [release candidate](https://www.reddit.com/r/sveltejs/comments/xa03y7/sveltekit_has_entered_its_release_candidate_phase/) phase which means there will be less breaking changes.

This means while there will still be bugs, there will not be any more major breaking changes, which is re-assuring.

However, there will still be a few more minor breaking changes.

## Alternatives

You can use svelte with several other module bundlers, such as [rollup](https://github.com/sveltejs/rollup-plugin-svelte) which was initially recommended but is now deprecated.

Vite, without SvelteKit, is another option as there is already an [official plugin](https://github.com/sveltejs/vite-plugin-svelte/).

There exists several other plugins to integrate with other tools like [webpack](https://github.com/sveltejs/svelte-loader), but the main recommended one now aside from SvelteKit is [vite](https://vitejs.dev/).

### SPA vs MPA

What all of these have in common are that they are all used for SPA's (single page apps). SvelteKit on the other hand makes MPA's (multi page apps).

Multi page apps tend to preform better in search engines. The only difference is that in SvelteKit each web page is treated individually where as in a SPA all pages stem from one page and content is shown based on the URL.

Setting up routing without SvelteKit is quite tricky, and involves a lot of unofficial libraries.

If you **are** making a SPA then you are going to be able to use one of these other tools.

## So should you use it?

I would say you should be able to use it as it is nearing release, however be aware there will be a few bugs and missing documentation.

I think now is the best time to learn how to use it as it just entered release candidate phase, and is inching closer and closer to the final 1.0 release.

If you are creating a single page app, you can still use one of the alternatives mentioned above.

Overall, SvelteKit is an amazing framework and if you don't mind making a [github issue](https://github.com/sveltejs/kit/issues) here and there it works great.
