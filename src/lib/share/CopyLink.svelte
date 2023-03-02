<script lang="ts">
  let copiedLink: boolean = false;
  export let url: string;
</script>

<button
  class="transparent-btn link-btn"
  on:click={async () => {
    await navigator.clipboard.writeText(url);
    copiedLink = true;
    setTimeout(() => (copiedLink = false), 500);
  }}
  title="Copy Link"
>
  <svg
    class="{copiedLink ? 'link-copied' : ''} link-icon share-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="54"
    viewBox="3 8 50 55.5"
    ><path
      d="M29.518 12.25l-8.705 8.704a13.624 13.624 0 0 0-2.881 4.26 13.617 13.617 0 0 0-1.128 5.377c0 5.48 3.076 8.778 4.01 9.77 2.346 2.494 7.014 3.983 7.416 3.674.637-.49 2.665-3.002.174-5.764-.452-.502-3.605-.852-5.154-4.667-.836-2.059-.753-4.129.076-6.055a7.8 7.8 0 0 1 1.647-2.434l8.705-8.704c3.057-3.057 8.032-3.057 11.089 0 3.057 3.057 3.057 8.032 0 11.089l-4.175 4.174a17.549 17.549 0 0 1 2.37 5.947l5.963-5.962c5.35-5.351 5.35-14.057 0-19.408C43.574 6.9 34.869 6.9 29.518 12.25z"
    /><path
      d="M26.357 59.768l9.01-9.01a13.624 13.624 0 0 0 2.881-4.26 13.617 13.617 0 0 0 1.128-5.377c0-5.48-3.076-8.778-4.01-9.77-2.346-2.494-7.014-3.983-7.416-3.674-.637.49-2.665 3.002-.174 5.764.452.502 3.605.852 5.154 4.667.836 2.059.753 4.129-.076 6.055a7.8 7.8 0 0 1-1.647 2.434l-9.01 9.01c-3.057 3.057-8.032 3.057-11.089 0-3.057-3.057-3.057-8.032 0-11.089l4.479-4.479a17.549 17.549 0 0 1-2.37-5.947L6.95 40.36c-5.35 5.351-5.35 14.057 0 19.408 5.351 5.35 14.057 5.35 19.407 0z"
    /></svg
  >
</button>

<style>
  .link-icon {
    height: 20px;
    width: 20px;
    fill: var(--fg);
    display: block;
  }

  .link-icon * {
    transition: 0.2s;
  }

  .link-copied {
    fill: var(--green);
  }

  .link-btn {
    cursor: pointer;
  }
</style>
