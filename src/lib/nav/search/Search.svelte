<script lang="ts">
  export let search: string = "";
</script>

<div class="search-bar">
  <button
    class={search == "" ? "close-btn" : "close-btn close-btn-active"}
    on:click={() => (search = "")}
  >
    <svg
      class={search == "" ? "close" : "close close-active"}
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
  <input
    class="search transparent-btn"
    placeholder="Search"
    type="text"
    bind:value={search}
  />
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
    border: 2px var(--fg-secondary) solid;
    padding: 0.5em;
    padding-left: calc(0.5em + 1.75em);
    border-radius: 8em;
    width: 8em;
    background: no-repeat 0.25rem 50% / 1.75em 1.75em
      url(/svg/magnifying-glass.svg);
  }

  .search:focus {
    outline: 0;
    border-color: var(--green);
  }

  .close-btn {
    position: absolute;
    left: calc(50% + 3.6em);
    border: 0;
    background: 0;
    margin: 0;
    padding: 0;
    display: block;
  }

  .close-btn-active {
    cursor: pointer;
  }

  .close {
    stroke: var(--fg-secondary);
    width: 14px;
    display: block;
    overflow: visible;
  }

  .close-active {
    stroke: var(--fg);
  }
</style>
