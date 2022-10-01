<script lang="ts">
  export let search: string = "";
</script>

<div class="search-bar">
  <svg
    class="magnifying-glass"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
    />
  </svg>

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
    background-color: var(--bg-secondary);
    padding: 0.5em;
    padding-left: calc(0.5em + 24px);
    border-radius: 8em;
    width: 8em;
  }

  .search:focus {
    outline: 0;
    border-color: var(--green);
  }

  .magnifying-glass {
    fill: var(--bg-pop);
    width: 24px;
    position: absolute;
    left: calc(50% - 4.2em);
    top: 1.8em;
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
