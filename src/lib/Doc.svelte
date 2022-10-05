<script lang="ts">
  import type { Doc } from "src/docs";
  import "/src/css/doc.css";
  import "/src/css/code.css";

  export let doc: Doc;

  const url = `https://talwat.github.io/blog/${
    doc.attributes.id !== "about" ? "posts/" : ""
  }${doc.attributes.id}`;
</script>

<svelte:head>
  <title>Talwat's Blog - {doc.attributes.title}</title>
  <meta name="twitter:title" content="Talwat's Blog - {doc.attributes.title}" />
  <meta name="og:title" content="Talwat's Blog - {doc.attributes.title}" />

  {#if doc.attributes.longDesc}
    <meta name="description" content={doc.attributes.longDesc} />
    <meta name="twitter:description" content={doc.attributes.longDesc} />
    <meta name="og:description" content={doc.attributes.longDesc} />
  {/if}

  {#if doc.attributes.tags}
    <meta name="keywords" content={doc.attributes.tags.join(", ")} />
  {/if}

  <meta name="og:url" content={url} />
</svelte:head>

<div class="master">
  <div class="heading-info">
    <h1 class="title">{doc.attributes.title}</h1>
    {#if doc.attributes.date && doc.attributes.desc}
      <div class="metadata">
        <h2 class="metadata-txt">
          {new Date(doc.attributes.date).toLocaleDateString("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })} - {doc.attributes.desc}
        </h2>
        <div class="share">
          <a
            class="share-twitter share-link"
            href="https://twitter.com/intent/tweet?text={url}          "
          >
            <img
              class="twitter-icon share-icon"
              alt="Twitter logo"
              src="/blog/svg/twitter.svg"
            />
          </a>
          <a
            class="share-facebook share-link"
            href="http://www.facebook.com/share.php?u={url}"
          >
            <img
              class="facebook-icon share-icon"
              alt="Facebook logo"
              src="/blog/svg/facebook.svg"
            />
          </a>
        </div>
      </div>
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

  .share {
    display: flex;
    margin: 0;
    gap: 0.6em;
  }

  .share-icon {
    display: block;
  }

  .twitter-icon {
    height: 20px;
    width: 24px;
  }

  .facebook-icon {
    height: 20px;
    width: 20px;
  }

  .title {
    color: var(--fg);
    font-size: 3em;
    margin-bottom: 0;
    margin-top: 0.25em;
  }

  .metadata-txt {
    color: var(--fg-secondary);
    font-size: 1.1em;
    margin: 0;
  }

  .metadata {
    display: flex;
    flex-direction: row;
    gap: 0.6em;
    margin: 0.33em 0 0.33em 0;
    align-items: center;
  }

  .heading-info {
    border-bottom: 1px solid;
    margin-bottom: 0.4em;
    padding-bottom: 0.4em;
  }
</style>
