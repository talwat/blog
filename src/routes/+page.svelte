<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Talwat's Technology & Coding Blog</title>
</svelte:head>

<main>
  <h1 class="main-heading">Talwat's Blog</h1>

  <div class="posts">
    {#each data.posts.sort( (a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1) ) as post}
      <div class="post">
        <a href="/blog/posts/{post.id}" class="post-link">{post.title}</a> - {post.date}
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    padding: 12px;
  }

  .post-link {
    color: var(--fg);
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
