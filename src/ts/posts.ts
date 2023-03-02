import type { DocAttributes } from "$ts/docs";
import { get, writable, type Writable } from "svelte/store";
import { root } from "./metadata";

/**
 * Universal posts store, declared whenever needed with the `setPostsList` function. This is either at the homepage or when the searchbar is first used.
 */
export const posts: Writable<DocAttributes[]> = writable([]);

/**
 * Function to set posts list, does nothing if posts list is already defined.
 *
 * @param fetch Function to fetch with
 */
export async function setPostsList(
  fetch: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ) => Promise<Response>
) {
  if (get(posts).length !== 0) return; // If the posts are already defined, return.

  const resp = await fetch(`${root}/api/docs/posts/list`);
  posts.set((await resp.json()) as DocAttributes[]);
}
