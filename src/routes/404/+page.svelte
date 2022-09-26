<script>
  import { page } from "$app/stores";
  import Error from "$lib/Error.svelte";
</script>

<!-- Specify status, but leave everything else -->
<Error page={{ ...$page, status: 404 }} />
