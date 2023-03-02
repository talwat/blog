import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";
import type { Doc } from "$ts/docs";
import { base } from "$app/paths";

export const load: PageLoad = async ({ fetch }) => {
  const resp = await fetch(`${base}/api/docs/about`);

  if (resp.status === 404) {
    throw error(404, `About page not found`);
  }

  const json: Doc = (await resp.json()) as Doc;

  return json;
};
