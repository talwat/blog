<script lang="ts">
  import Posts from "$lib/post-list/posts/Posts.svelte";
  import { websiteURL } from "$src/ts/metadata";
  import type { PageData } from "./$types";

  export let data: PageData;

  /**
   * Sorted posts
   */
  const posts = data.posts.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );
</script>

<svelte:head>
  <title>Talwat's Technology & Coding Blog</title>
  <meta
    name="keywords"
    content="coding, programming, technology, linux, vite, html, css, html5, js, javascript, ts, typescript, svelte, sveltekit, web, websites, website, blog"
  />
  <meta
    name="description"
    content="This blog is for technology, programming, and more. It talks about many things such as different build tools and web frameworks. Made by Tal."
  />

  <meta name="twitter:title" content="Talwat's Technology & Coding Blog" />
  <meta
    name="twitter:description"
    content="This blog is for technology, programming, and more. It talks about many things such as different build tools and web frameworks. Made by Tal."
  />

  <meta name="og:title" content="Talwat's Technology & Coding Blog" />
  <meta name="og:url" content="{websiteURL}" />
  <meta
    name="og:description"
    content="This blog is for technology, programming, and more. It talks about many things such as different build tools and web frameworks. Made by Tal."
  />
</svelte:head>

<main>
  <h1 class="main-heading">Posts</h1>

  <div class="line" />

  <Posts {posts} />
</main>

<style>
  main {
    padding: 12px;
  }

  .line {
    background-color: var(--bg-pop);
    margin-top: 0.7em;
    margin-bottom: 1.6em;
    width: auto;
    height: 1px;
  }

  .main-heading {
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>
