<script lang="ts">
  import "/src/app.css";
  import Navbar from "$lib/nav/Navbar.svelte";
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
    rel="stylesheet"
  />
</svelte:head>

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
