import type { DocAttributes } from "src/docs";
import { get, writable, type Writable } from "svelte/store";

/**
 * Universal posts store, declared whenever needed with the `getPosts` function. This is either at the homepage or when the searchbar is first used.
 */
export const posts: Writable<DocAttributes[]> = writable([]);

/**
 * Function to get posts list, does nothing if posts list is already defined.
 *
 * @param fetch Function to fetch with
 */
export async function getPosts(
  fetch: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ) => Promise<Response>
) {
  if (get(posts).length == 0) {
    const resp = await fetch(`/blog/api/docs/posts/list`);
    posts.set((await resp.json()) as DocAttributes[]);
  }
}
