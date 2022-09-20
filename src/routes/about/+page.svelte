<script lang="ts">
  import Doc from "$lib/Doc.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Talwat's Blog - About</title>
  <meta name="description" content={data.attributes.longDesc} />

  <meta name="twitter:title" content="Talwat's Blog - About" />
  <meta name="twitter:description" content={data.attributes.longDesc} />

  <meta name="og:title" content="Talwat's Blog - About" />
  <meta name="og:url" content="https://talwat.github.io/blog/about" />
  <meta name="og:description" content={data.attributes.longDesc} />
</svelte:head>

<main>
  <Doc doc={data} />
</main>
