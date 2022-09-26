<script lang="ts">
  import Tag from "./Tag.svelte";

  export let tags: string[];
</script>

<div class="tags">
  {#each tags as tag}
    <Tag {tag} />
  {/each}
</div>

<style>
  .tags {
    display: flex;
    gap: 0.3em;
    margin-top: 0.3em;
  }
</style>
