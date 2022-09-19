import { json, error, type RequestHandler } from "@sveltejs/kit";

import fs from "fs/promises";
import { renderMd } from "$lib/utils";

export const GET: RequestHandler = async ({ params }) => {
  /** Error thrown by fs.readFile **/
  interface FSError {
    code: string;
  }

  /*
    params.id will never be undefined unless something went very wrong in sveltekit.
  */

  if (params.id === undefined)
    throw error(
      500,
      "ID parameter in URL is undefined, if you see this, sveltekit probably has a bug."
    );

  const path: string = `docs/posts/${params.id ? params.id : "undefined"}.md`;

  let raw: string;

  try {
    raw = await fs.readFile(path, "utf-8");
  } catch (err) {
    const fsError = err as FSError;

    if (
      // Check for known 404 error
      fsError.code !== undefined &&
      fsError.code === "ENOENT"
    ) {
      throw error(404, "Not found");
    } else {
      // No clue what the error is, throw it
      throw err;
    }
  }

  return json(renderMd(`posts/${params.id}`, raw));
};
