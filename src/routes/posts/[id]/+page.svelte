<script lang="ts">
  import type { PageData } from "./$types";
  import Doc from "$lib/Doc.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>Talwat's Blog - {data.attributes.title}</title>
</svelte:head>

<main>
  <Doc doc={data} />
</main>
