<script lang="ts">
  import "/src/app.css";
  import Navbar from "$lib/nav/Navbar.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>

<div class="master">
  <div>
    <header>
      <Navbar />
    </header>

    <div class="content">
      <slot />
    </div>
  </div>

  <Footer />
</div>

<style>
  .content {
    padding-top: 5em;
  }

  .master {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
  }
</style>
