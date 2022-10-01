<script lang="ts">
  export let tag: string;
</script>

<div class="tag">
  {tag}
</div>

<style>
  .tag {
    background-color: var(--bg-secondary);
    font-size: 0.8em;
    border-radius: 0.8em;
    padding: 0.4em 0.7em 0.4em 0.7em;
  }
</style>
