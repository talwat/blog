<script lang="ts">
  import { onMount } from "svelte";

  let fg = "white";

  onMount(() => {
    fg = window.getComputedStyle(document.body).getPropertyValue("--fg");
  });
</script>

<svg viewBox="0 0 100 100" width="0.5em" height="0.5em">
  <circle cx="50" cy="50" r="50" fill={fg} />
</svg>
