<script lang="ts">
  export let search: string = "";
</script>

<div class="search-bar">
  <button
    class={search == "" ? "x-btn" : "x-btn x-btn-active"}
    on:click={() => (search = "")}
  >
    <svg
      class={search == "" ? "x" : "x x-active"}
      width="30"
      height="30"
      viewBox="-5 -5 60 60"
      stroke-width="10"
      stroke-linecap="round"
    >
      <line x2="50" y2="50" />
      <line x1="50" y2="50" />
    </svg>
  </button>
  <input class="search" placeholder="Search" type="text" bind:value={search} />
</div>

<style>
  .search-bar {
    display: flex;
    align-content: center;
    align-items: center;
    height: 100%;
  }

  ::placeholder {
    color: var(--fg-secondary);
    opacity: 1;
  }

  .search {
    color: var(--fg);
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
    border: 2px var(--bg-pop) solid;
    padding: 0.5em;
    padding-left: calc(0.5em + 24px);
    border-radius: 8em;
    width: 8em;
    background: no-repeat 0.25rem 50% / 1.75em 1.75em
      url(/blog/svg/magnifying-glass.svg);
  }

  .search:focus {
    outline: 0;
    border-color: var(--green);
  }

  .x-btn {
    position: absolute;
    left: calc(50% + 3.6em);
    border: 0;
    background: 0;
    margin: 0;
    padding: 0;
    display: block;
  }

  .x-btn-active {
    cursor: pointer;
  }

  .x {
    stroke: var(--bg-pop);
    width: 14px;
    display: block;
    overflow: visible;
  }

  .x-active {
    stroke: var(--fg);
  }
</style>
