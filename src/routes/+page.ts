import { setPostsList, posts } from "$ts/posts";
import { get } from "svelte/store";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  await setPostsList(fetch);

  return {
    posts: get(posts),
  };
};
