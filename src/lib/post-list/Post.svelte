<script lang="ts">
  import type { DocAttributes } from "src/docs";
  import Tags from "./Tags.svelte";

  export let post: DocAttributes;
</script>

<a href="/posts/{post.id}" class="post post-link">
  <div class="date">
    <svg
      class="calender-logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line
        fill="currentColor"
        x1="16"
        y1="2"
        x2="16"
        y2="6"
      /><line fill="currentColor" x1="8" y1="2" x2="8" y2="6" /><line
        fill="currentColor"
        x1="3"
        y1="10"
        x2="21"
        y2="10"
      /></svg
    >
    <p class="date-txt">{post?.date}</p>
  </div>
  <h2 class="title">{post.title}</h2>
  <p class="metadata">
    {post.desc}
  </p>

  {#if post.tags}
    <Tags tags={post.tags} />
  {/if}
</a>

<style>
  .date {
    display: flex;
    align-items: center;
    gap: 0.3em;
    margin-bottom: 0.3em;
  }

  .date-txt {
    font-size: 0.8em;
    margin: 0;
  }

  .calender-logo {
    height: 1em;
  }

  .post-link {
    color: var(--fg);
    text-decoration: none;
    height: auto;
  }

  .title,
  .metadata {
    margin: 0;
  }

  .metadata {
    color: var(--fg-secondary);
    font-size: 0.8em;
  }

  .title {
    margin: 0;
    font-size: 1.2em;
  }

  .post {
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: 3em;
    gap: 0.2em;
    align-items: flex-start;
  }
</style>
