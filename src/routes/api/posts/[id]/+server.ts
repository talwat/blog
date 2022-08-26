import { json, error, type RequestHandler } from "@sveltejs/kit";

import fs from "fs/promises";
import fm from "front-matter";
import { marked } from "marked";

export const GET: RequestHandler = async ({ params }) => {
  /** Error thrown by fs.readFile **/
  interface FSError {
    code: string;
  }

  const path: string = `posts/${params.id}.md`;

  let raw: string;

  try {
    raw = await fs.readFile(path, "utf-8");
  } catch (err) {
    console.log(err);
    if ( // Check for known 404 error
      (err as FSError).code !== undefined &&
      (err as FSError).code === "ENOENT"
    ) {
      throw error(404, JSON.stringify({ error: "Not found" }));
    } else { // No clue what the error is, throw it.
      throw err;
    }
  }
  const frontMatter = fm(raw);

  return json({
    content: marked.parse(frontMatter.body, {
      headerIds: false,
    }),
    attributes: frontMatter.attributes,
  });
};
