<script lang="ts">
  import FooterItem from "./FooterItem.svelte";
</script>

<footer>
  <div class="footer">
    <div class="items">
      <FooterItem text="twitter" href="https://twitter.com/talwat_" />
      <FooterItem text="github" href="https://github.com/talwat" />
      <FooterItem
        text="youtube"
        href="https://www.youtube.com/channel/UCpO9FoLY3QBn7FmjG-UAgow"
      />
    </div>
  </div>
</footer>

<style>
  .items {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
  }

  .footer {
    background-color: var(--bg-secondary);
    height: fit-content;
    padding: 1em;
    width: auto;
  }
</style>
