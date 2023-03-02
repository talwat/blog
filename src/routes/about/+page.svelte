<script lang="ts">
  import Doc from "$lib/Doc.svelte";
  import type { Doc as DocType } from "$src/ts/docs";

  export let data: DocType;
</script>

<main>
  <Doc doc={data} />
</main>
