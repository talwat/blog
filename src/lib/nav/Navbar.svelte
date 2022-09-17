<script lang="ts">
  import "/src/app.css";
  import Seperator from "./Seperator.svelte";
</script>

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
    color: var(--fg);
    text-decoration: none;
  }

  .left a:hover,
  .right a:hover {
    color: var(--link);
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
