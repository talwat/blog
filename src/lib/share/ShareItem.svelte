<script lang="ts">
  export let href: string;
  export let name: string;
</script>

<a title="Share To {name}" {href}>
  <slot />
</a>

<style>
  :global(.share-icon) {
    display: block;
  }

  :global(.share-icon-twitter) {
    height: 20px;
    width: 24px;
  }

  :global(.share-icon-facebook) {
    height: 20px;
    width: 20px;
  }

  :global(.share-icon-whatsapp) {
    height: 20px;
    width: 20px;
  }
</style>
