<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<main>
  {@html data.content}
</main>

<style>
  main :global(h1),
  main :global(h2),
  main :global(h3),
  main :global(h4),
  main :global(h5),
  main :global(h6) {
    margin-bottom: 0.25em;
    margin-top: 0.25em;
  }

  main :global(p) {
    margin-bottom: 0.25em;
    margin-top: 0.25em;
  }
</style>
