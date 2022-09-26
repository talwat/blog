import type { DocAttributes } from "src/docs";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const resp = await fetch(`/blog/api/docs/posts/list`);
  const json: DocAttributes[] = (await resp.json()) as DocAttributes[];

  return {
    posts: json,
  };
};
