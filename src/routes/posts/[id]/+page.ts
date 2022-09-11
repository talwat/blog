import { browser, dev } from "$app/environment";
import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";
import type { Post } from "src/posts";

export const load: PageLoad = async ({ params, fetch }) => {
  const resp = await fetch(`/blog/api/posts/${params.id}`);

  if (resp.status === 404) {
    throw error(404, `Post not found: ${params.id}`);
  }

  const json: Post = (await resp.json()) as Post;

  return json;
};

export const csr = true;
