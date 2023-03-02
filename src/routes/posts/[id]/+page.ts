import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";
import type { Doc } from "$ts/docs";
import { root } from "$src/ts/metadata";

export const load: PageLoad = async ({ params, fetch }) => {
  const resp = await fetch(`${root}/api/docs/posts/${params.id}`);

  if (resp.status === 404) {
    throw error(404, `Post not found: ${params.id}`);
  }

  const json: Doc = (await resp.json()) as Doc;

  return json;
};
