<script lang="ts">
  import Doc from "$lib/Doc.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<main>
  <Doc doc={data} />
</main>
