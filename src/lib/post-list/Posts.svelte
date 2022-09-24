<script lang="ts">
  import type { DocAttributes } from "src/docs";
  import Post from "./Post.svelte";

  export let posts: DocAttributes[];
</script>

<div class="posts">
  {#each posts as post, i}
    {#if i !== 0}
      <div class="post-line line" />
    {/if}
    <Post {post} />
  {/each}
</div>

<style>
  .posts {
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    padding-left: 0.7em;
    padding-right: 0.7em;
    margin-bottom: 1.6em;
  }

  .line {
    background-color: var(--bg-4);
    margin-top: 0.7em;
    margin-bottom: 1.6em;
    width: auto;
    height: 1px;
  }

  .post-line {
    margin-top: 0.2em;
    margin-bottom: 0.2em;
  }
</style>
