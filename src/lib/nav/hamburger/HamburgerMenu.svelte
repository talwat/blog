<script lang="ts">
  import type { NavItems } from "../Navbar.svelte";
  export let items: NavItems;

  import { slide } from "svelte/transition";
</script>

<div class="menu" transition:slide>
  <ul class="nav-items">
    {#each items as item}
      {#if item !== "bullet"}
        <!-- Bullet does nothing in smaller view (-600 px in viewport) -->
        {#if item === "line"}
          <div class="line" />
        {:else}
          <li>
            <a class="nav-link" href={item.href}>{item.text}</a>
          </li>
        {/if}
      {/if}
    {/each}
  </ul>
</div>

<style>
  .line {
    width: auto;
    height: 1px;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;

    background-color: var(--bg-pop);
  }

  .nav-items {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .nav-items > li {
    margin-top: 0.3em;
    margin-bottom: 0.3em;
  }

  .menu {
    width: auto;
    height: fit-content;
    background-color: inherit;
    z-index: 1;
    padding: 1em;
    border-top: 1px var(--bg-pop) solid !important; /* Important for fixing a bug? in svelte transition */
  }
</style>
