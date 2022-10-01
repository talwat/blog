import { getPosts, posts } from "$lib/posts";
import { get } from "svelte/store";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  await getPosts(fetch);

  return {
    posts: get(posts),
  };
};
