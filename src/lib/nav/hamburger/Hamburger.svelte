<script lang="ts">
  export let show: boolean;
</script>

<button on:click={() => (show = !show)} class="transparent-btn" aria-label="Toggle menu" aria-expanded="{show}">
  {#if show}
    <svg
      class="icon"
      width="30"
      height="30"
      viewBox="-5 -5 60 60"
      stroke-width="10"
      stroke-linecap="round"
    >
      <line x2="50" y2="50" />
      <line x1="50" y2="50" />
    </svg>
  {:else}
    <svg viewBox="0 20 75 30" width="30" height="30" class="icon">
      <rect width="75" height="10" rx="8" />
      <rect y="30" width="75" height="10" rx="8" />
      <rect y="60" width="75" height="10" rx="8" />
    </svg>
  {/if}
</button>

<style>
  .transparent-btn {
    background: 0;
    border: 0;
    margin: 0;
    padding: 0;
  }

  .icon {
    display: block;
    fill: var(--fg);
    stroke: var(--fg);
  }
</style>
