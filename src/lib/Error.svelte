<script lang="ts">
  import { base } from "$app/paths";
  import type { Page } from "@sveltejs/kit";

  export let page: Page<Record<string, string>>;
</script>

<svelte:head>
  <title>Talwat's Blog - {page.status}</title>
  <meta name="description" content="{page.status} error." />

  <meta name="twitter:title" content="Talwat's Blog - {page.status}" />
  <meta name="twitter:description" content="{page.status} error." />

  <meta name="og:title" content="Talwat's Blog - {page.status}" />
  <meta name="og:url" content={page.url.toString()} />
  <meta name="og:description" content="{page.status} error." />
</svelte:head>

<main>
  <div class="error">
    <h1 class="code">{page.status} :(</h1>

    <h2 class="message">
      {page.status === 404 ? "Not Found" : page.error?.message}
    </h2>

    <div class="line" />

    <a class="return-home" href="/{base}">Return home</a>
  </div>
</main>

<style>
  main {
    padding: 12px;
  }

  .line {
    width: auto;
    height: 1px;
    background-color: var(--bg-3);
  }

  .return-home {
    font-size: 1.3em;
  }

  .error {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 1em;
  }

  .code {
    font-size: 5em;
  }

  .message {
    font-size: 2em;
  }

  .code,
  .message,
  .return-home {
    margin: 0;
    text-align: center;
  }
</style>
