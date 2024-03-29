import { json, error, type RequestHandler } from "@sveltejs/kit";

import { getRawDoc } from "$ts/get";
import { render } from "$ts/md";

export const GET: RequestHandler = async ({ params }) => {
  /*
    params.id will never be undefined unless something went very wrong in sveltekit.
  */

  if (params.id === undefined)
    throw error(
      500,
      "ID parameter in URL is undefined, if you see this, sveltekit probably has a bug."
    );

  const path: string = `docs/posts/${params.id ? params.id : "undefined"}.md`;
  const raw: string = await getRawDoc(path);

  return json(render(params.id, raw, `posts/${params.id}`));
};
