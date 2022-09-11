import { json, type RequestHandler } from "@sveltejs/kit";

import type { PostAttributes } from "src/posts";

import fs from "fs/promises";
import fm from "front-matter";
import path from "path";

export const GET: RequestHandler = async () => {
  const files: string[] = await fs.readdir("posts");

  const posts: PostAttributes[] = [];

  for (const file of files) {
    const raw: string = await fs.readFile(`posts/${file}`, "utf-8");
    let attributes: PostAttributes = fm(raw).attributes as PostAttributes;
    attributes.id = path.parse(file).name;
    posts.push(attributes);
  }

  return json(posts);
};
