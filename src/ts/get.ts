/** Gets the raw documents from the filesystem. **/

import { error } from "@sveltejs/kit";
import { type DocAttributes, getAttributes } from "$ts/docs";
import fs from "fs/promises";
import path from "path";

export async function getRawDoc(path: string) {
  /** Error thrown by fs.readFile **/
  interface FSError {
    code: string;
  }

  try {
    return await fs.readFile(path, "utf-8");
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
}

/* Gets a list of posts from the filesystem with their attributes but without their content. */
export async function getPostList(): Promise<DocAttributes[]> {
  const files: string[] = await fs.readdir("docs/posts");

  const posts: DocAttributes[] = [];

  for (const file of files) {
    const raw: string = await fs.readFile(`docs/posts/${file}`, "utf-8");
    const attributes: DocAttributes = getAttributes(raw);
    attributes.id = path.parse(file).name;
    posts.push(attributes);
  }

  return posts;
}
