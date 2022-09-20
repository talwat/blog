<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Talwat's Technology & Coding Blog</title>
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
  <meta name="og:url" content="https://talwat.github.io/blog" />
  <meta
    name="og:description"
    content="This blog is for technology, programming, and more. It talks about many things such as different build tools and web frameworks. Made by Tal."
  />
</svelte:head>

<main>
  <h1 class="main-heading">Talwat's Blog</h1>

  <div class="posts">
    {#each data.posts.sort( (a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1) ) as post}
      <div class="post">
        <a href="/blog/posts/{post.id}">{post.title}</a> - {post.date}
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    padding: 12px;
  }

  .main-heading {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .posts {
    display: flex;
    flex-direction: column;
  }
</style>
