<script lang="ts">
  import type { Doc } from "src/docs";
  import "/src/doc.css";
  import "highlight.js/styles/atom-one-dark.css";

  export let doc: Doc;
</script>

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
  <div class="doc-content">
    {@html doc.content}
  </div>
</div>

<style>
  .master {
    padding: 0.8em;
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
  }
</style>
