<script lang="ts">
  import type { PageData } from "./$types";
  import Doc from "$lib/Doc.svelte";

  export let data: PageData;
</script>

<main>
  <Doc doc={data} />
</main>
