<script lang="ts">
  import "../app.css";
  import Seperator from "$lib/nav/Seperator.svelte";
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
  <nav class="top-bar">
    <div class="nav-items">
      <div class="left">
        <a href="/blog">
          <img src="/blog/img/pfp.png" alt="Home" />
        </a>
      </div>
      <div class="right">
        <a href="/blog/about">About me</a>
        <Seperator />
        <a href="https://github.com/talwat">Github</a>
      </div>
    </div>
  </nav>
</header>

<div class="content">
  <slot />
</div>

<style>
  .top-bar {
    background-color: rgb(51, 51, 51, 0.5);
    position: fixed;
    top: 0;
    width: 100vw;
    margin: 0;
    padding: 0;
    height: 5em;
    box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 1;
  }

  .content {
    padding-top: 5em;
  }

  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: 100%;
    width: 100%;
  }

  .left,
  .right {
    width: 50%;

    display: flex;
    align-items: center;
    gap: 0.6em;
  }

  .left *,
  .right * {
    max-height: 4em;
  }

  .left a,
  .right a {
    color: white;
    text-decoration: none;
  }

  .left a:hover,
  .right a:hover {
    color: hsl(220, 100%, 60%);
    text-decoration: underline;
  }

  .left {
    padding-left: 3em;
    justify-content: flex-start;
  }

  .right {
    padding-right: 3em;
    justify-content: flex-end;
  }
</style>
