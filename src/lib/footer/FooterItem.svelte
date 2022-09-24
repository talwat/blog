<script lang="ts">
  export let text: string;
  export let href: string;

  const lowerCase = text.toLowerCase();
  const normalCase = lowerCase[0].toUpperCase() + lowerCase.slice(1);
</script>

<div class="item">
  <a {href}>
    <img
      class="{lowerCase}-logo"
      src="/blog/svg/{lowerCase}.svg"
      alt="{normalCase} logo"
    />
  </a>
</div>

<style>
  .item * {
    height: 2em;
  }

  .twitter-logo {
    width: 39px;
    height: 32px;
  }

  .github-logo {
    width: 32px;
    height: 32px;
  }

  .youtube-logo {
    width: 46px;
    height: 32px;
  }
</style>
