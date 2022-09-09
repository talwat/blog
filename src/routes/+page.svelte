<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>Talwat's Blog</h1>

{#each data.posts as post}
  <a href="/blog/posts/{post.id}">{post.name}</a> - {post.date}
  <br />
{/each}
