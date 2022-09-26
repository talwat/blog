---
title: "How I made this site"
date: "9/11/2022"
desc: "What technologies and methods I used to create this blog."
longDesc: "How I made this blog using svelte, an open source javascript framework, sveltekit, a meta-framework for svelte, and other various programming technologies."
tags:
    - svelte
    - sveltekit
    - vite
    - js
    - blog
    - site
---

## Why make a blog?

I made this blog to try and share my experiences, as well as learn a few things about sveltekit. This is my first true project using the framework.

This blog won't be super professional, as it is only a learning experience, but I will try to put useful information on here.

## The technology I used

I used [svelte](https://svelte.dev/) and [sveltekit](https://kit.svelte.dev/) _(which itself is powered by [vite](https://vitejs.dev/))_. These are two amazingly useful frameworks. Svelte is mainly for the UI itself, while Sveltekit manages things like routing and SSR (server side rendering).

For hosting, I am using [github pages](https://pages.github.com/), which allows me to host this blog for free. The [source code](https://github.com/talwat/blog) for this blog is on github, too!

I'm also using various technologies like Typescript to make the whole process easier.

A list of additional libraries I am using are:

-   [Marked.js](https://marked.js.org/) - A super useful library for rendering [markdown](https://en.wikipedia.org/wiki/Markdown), as all of the posts on this site [including this one](https://github.com/talwat/talwat.github.io/blob/main/docs/posts/this-blog.md) are written in [markdown](https://en.wikipedia.org/wiki/Markdown).
-   [xmlbuilder2](https://oozcitak.github.io/xmlbuilder2/) - This library is mainly used for creating this site's [sitemap](https://www.sitemaps.org/).
-   [front-matter](https://github.com/jxson/front-matter) - I use this to extract meta data (front-matter) from posts.
-   [highlight.js](https://highlightjs.org/) - This library is for syntax highlighting, and it allows me to syntax highlight code blocks.

## How it works

Essentially, this blog has a REST API which allows each web page to get data about each post through a `GET` request. Its content, the description, etc... And then uses that data to display the post. The [about](/about) page is handled very similarly.

This method is the cleanest I have found so far, so I will continue using it.

Feel free to look at all the [code for the blog](https://github.com/talwat/talwat.github.io) yourself.

## Why not use something such as Wordpress?

I decided not to use wordpress because I wanted this blog to be not only for learning sveltekit but also other things such as submitting a site to google.

Its much more satisfying and rewarding to make this blog manually.

## Conclusion

While this is my first actual post here, I hope to make more and improve the website even further. Thank you for reading.
