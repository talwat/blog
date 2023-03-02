<script lang="ts">
  import type { DocAttributes } from "$src/ts/docs";
  import { posts } from "$ts/posts";

  export let search: string;
  let filteredPosts: DocAttributes[] = [];

  $: filteredPosts = filter($posts, search);

  function filter(posts: DocAttributes[], query: string): DocAttributes[] {
    const filteredPosts = [];

    for (const post of posts) {
      post.title.toLowerCase().includes(query.toLowerCase()) &&
        filteredPosts.push(post);
    }

    return filteredPosts;
  }
</script>

<div class="search-menu">
  <div class="posts">
    {#each filteredPosts as post}
      <a class="post" href="/blog/posts/{post.id}">
        {post.title}
      </a>
    {/each}
  </div>

  {#if filteredPosts.length == 0}
    <div class="no-posts-found">No posts found</div>
  {/if}
</div>

<style>
  .search-menu {
    width: auto;
    height: fit-content;
    background-color: inherit;
    z-index: 1;
    padding: 1em;
    border-top: 1px var(--bg-pop) solid !important;
  }

  .posts {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
  }

  .post {
    background-color: var(--bg-pop);
    padding: 0.4em;
    border-radius: 0.4em;
    color: var(--fg);
    text-decoration: none;
  }
</style>
