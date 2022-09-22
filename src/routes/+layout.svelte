<script lang="ts">
  import "/src/app.css";
  import Navbar from "$lib/nav/Navbar.svelte";
</script>

<header>
  <Navbar />
</header>

<div class="content">
  <slot />
</div>

<style>
  .content {
    padding-top: 5em;
  }
</style>
