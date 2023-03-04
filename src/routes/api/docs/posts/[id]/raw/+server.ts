import { text, error, type RequestHandler } from "@sveltejs/kit";

import { getRawDoc } from "$ts/get";

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

  return text(raw);
};
