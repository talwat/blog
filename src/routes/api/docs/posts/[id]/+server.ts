import { json, error, type RequestHandler } from "@sveltejs/kit";

import fs from "fs/promises";
import { renderMd } from "../../utils";

export const GET: RequestHandler = async ({ params }) => {
  /** Error thrown by fs.readFile **/
  interface FSError {
    code: string;
  }

  const path: string = `docs/posts/${params.id}.md`; // eslint-disable-line @typescript-eslint/restrict-template-expressions

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

  return json(renderMd(params.id as string, raw));
};
