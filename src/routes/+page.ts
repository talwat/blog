import { browser, dev } from "$app/env";
import type { PostAttributes } from "src/posts";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const resp = await fetch(`/blog/api/posts/list`);
  const json: PostAttributes[] = (await resp.json()) as PostAttributes[];

  return {
    posts: json,
  };
};

export const router = browser;
export const hydrate = dev;
