<script lang="ts" context="module">
  export interface Link {
    href: string;
    text: string;
  }

  export type NavItems = (Link | "bullet" | "line")[];
</script>

<script lang="ts">
  import { setPostsList } from "$ts/posts";
  import { onMount } from "svelte";

  import Hamburger from "./hamburger/Hamburger.svelte";

  import HamburgerMenu from "./hamburger/HamburgerMenu.svelte";
  import Search from "./search/Search.svelte";
  import SearchMenu from "./search/SearchMenu.svelte";
  import Seperator from "./Seperator.svelte";

  let showMenu = false;
  let search: string;

  const items: NavItems = [
    { href: "/blog/about", text: "About" },
    "bullet",
    { href: "https://github.com/talwat", text: "Github" },
  ];

  onMount(() => {
    setPostsList(fetch);
  });
</script>

<nav class="top-bar">
  <div class="nav-items">
    <div class="left">
      <a href="/blog">
        <img width="25" height="40" src="/blog/img/pfp.png" alt="Home" />
      </a>
    </div>

    <div class="normal-vw">
      <Search bind:search />
    </div>

    <div class="right normal-vw">
      {#each items as item}
        {#if item === "bullet"}
          <Seperator />
        {:else if item !== "line"}
          <!-- Line does nothing in normal (600+ px in viewport) view -->
          <a class="nav-link" href={item.href}>{item.text}</a>
        {/if}
      {/each}
    </div>
    <div class="small-vw right">
      <Hamburger bind:show={showMenu} />
    </div>
  </div>

  <div class="small-vw">
    {#if showMenu}
      <HamburgerMenu {items} />
    {/if}
  </div>

  <div class="normal-vw">
    {#if search}
      <SearchMenu bind:search />
    {/if}
  </div>
</nav>

<style>
  .small-vw {
    display: none !important;
  }

  .top-bar {
    background-color: var(--bg-secondary);
    position: fixed;
    top: 0;
    width: 100vw;
    margin: 0;
    padding: 0;
    box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 20%);
    z-index: 2;
  }

  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: auto;
    padding-left: 3em;
    padding-right: 3em;
    transition: 0.2s;
    height: 5em;
  }

  .left *,
  .right * {
    max-height: 3em;
  }

  .left,
  .right {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 0.6em;
  }

  .left {
    justify-content: flex-start;
  }

  .right {
    justify-content: flex-end;
  }

  @media only screen and (max-width: 600px) {
    .nav-items {
      padding-left: 1.5em;
      padding-right: 1.5em;
    }

    .left *,
    .right * {
      max-height: 2.5em;
    }

    .left :global(.icon),
    .right :global(.icon) {
      max-height: 2.5em;
      max-width: 2.5em;
    }

    .small-vw {
      display: initial !important;
    }

    .right.small-vw {
      display: flex !important;
    }

    .normal-vw {
      display: none !important;
    }
  }
</style>
