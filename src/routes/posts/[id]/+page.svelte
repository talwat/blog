<script lang="ts">
  import type { PageData } from "./$types";
  import "/src/post.css";

  export let data: PageData;
</script>

<main class="post-content">
  <div class="heading-info">
    <h1 class="title">{data.attributes.title}</h1>
    <h2 class="metadata">
      {new Date(data.attributes.date).toLocaleDateString("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })} - {data.attributes.desc}
    </h2>
  </div>
  {@html data.content}
</main>

<style>
  .metadata {
    color: #ccc;
    font-size: 18px;
  }

  .heading-info {
    padding-bottom: 12px;
    border-bottom: 1px solid;
  }

  main {
    padding: 12px;
  }
</style>
