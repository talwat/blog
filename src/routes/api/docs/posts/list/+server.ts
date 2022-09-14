import { json, type RequestHandler } from "@sveltejs/kit";

import type { DocAttributes } from "src/docs";

import fs from "fs/promises";
import fm from "front-matter";
import path from "path";

export const GET: RequestHandler = async () => {
  const files: string[] = await fs.readdir("docs/posts");

  const posts: DocAttributes[] = [];

  for (const file of files) {
    const raw: string = await fs.readFile(`docs/posts/${file}`, "utf-8");
    const attributes: DocAttributes = fm(raw).attributes as DocAttributes;
    attributes.id = path.parse(file).name;
    posts.push(attributes);
  }

  return json(posts);
};
