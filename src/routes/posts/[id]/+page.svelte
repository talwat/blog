<script lang="ts">
  import type { PageData } from "./$types";
  import Doc from "$lib/Doc.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>Talwat's Blog - {data.attributes.title}</title>
  <meta name="description" content={data.attributes.longDesc} />

  <meta name="og:title" content="Talwat's Blog - {data.attributes.title}" />
  <meta
    name="og:url"
    content="https://talwat.github.io/blog/posts/{data.attributes.id}"
  />
  <meta name="og:description" content={data.attributes.longDesc} />

  <meta
    name="twitter:title"
    content="Talwat's Blog - {data.attributes.title}"
  />
  <meta name="twitter:description" content={data.attributes.longDesc} />
</svelte:head>

<main>
  <Doc doc={data} />
</main>
