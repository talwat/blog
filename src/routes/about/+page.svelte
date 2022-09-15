<script lang="ts">
  import Doc from "$lib/Doc.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Talwat's Blog - About</title>
</svelte:head>

<main>
  <Doc doc={data} />
</main>
