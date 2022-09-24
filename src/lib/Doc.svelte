<script lang="ts">
  import type { Doc } from "src/docs";
  import "/src/css/doc.css";
  import "highlight.js/styles/atom-one-dark.css";

  export let doc: Doc;
</script>

<svelte:head>
  <title>Talwat's Blog - {doc.attributes.title}</title>
  <meta name="description" content={doc.attributes.longDesc} />

  <meta name="twitter:title" content="Talwat's Blog - {doc.attributes.title}" />
  <meta name="twitter:description" content={doc.attributes.longDesc} />

  <meta name="og:title" content="Talwat's Blog - {doc.attributes.title}" />
  <meta
    name="og:url"
    content="https://talwat.github.io/blog/{doc.attributes.id !== 'about'
      ? 'post/'
      : ''}
      {doc.attributes.id}"
  />
  <meta name="og:description" content={doc.attributes.longDesc} />
</svelte:head>

<div class="master">
  <div class="heading-info">
    <h1 class="title">{doc.attributes.title}</h1>
    {#if doc.attributes.date && doc.attributes.desc}
      <h2 class="metadata">
        {new Date(doc.attributes.date).toLocaleDateString("en", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })} - {doc.attributes.desc}
      </h2>
    {/if}
  </div>
  <article class="doc-content">
    {@html doc.content}
  </article>
</div>

<style>
  .master {
    padding: 2em;
  }

  .title {
    color: var(--fg);
    font-size: 3em;
    margin-bottom: 0;
    margin-top: 0.25em;
  }

  .metadata {
    color: var(--fg-secondary);
    margin: 0.3em 0 0.3em 0;
    font-size: 1.1em;
  }

  .heading-info {
    border-bottom: 1px solid;
    margin-bottom: 0.4em;
    padding-bottom: 0.4em;
  }
</style>
