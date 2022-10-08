import fm from "front-matter";
import hljs from "highlight.js";
import { marked } from "marked";
import fs from "fs/promises";
import path from "path";
import type { Doc, DocAttributes } from "src/docs";

import { error } from "@sveltejs/kit";

export function renderMd(id: string, raw: string, path: string = id): Doc {
  const frontMatter = fm(raw);

  /** FIXME: Huge mess of parsing and appending and whatnot, don't touch */
  const renderer = {
    heading(text: string, level: number) {
      const textID = text.toLowerCase().replaceAll(" ", "-");

      const sections = level === 1 ? "" : "</section><section>"; // Close previous section and open a new one
      const headingAnchorText = `<h${level} id="${textID}" class="heading-anchor-txt">${text}</h${level}>`;
      const anchor = `<a class="heading-anchor" href="/blog/${path}#${textID}">${headingAnchorText}</a>`;

      return `${sections} ${anchor}`;
    },
  };

  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlight(code, { language: lang }).value;
    },
  });

  marked.use({ renderer });

  const parsedHTML = marked.parse(frontMatter.body, {
    headerIds: false,
  });

  const attributes = frontMatter.attributes as DocAttributes;

  attributes.id = id;

  return {
    content: `<section>${parsedHTML.trim()}</section>`,
    attributes: attributes,
  };
}

export async function getListOfPosts(): Promise<DocAttributes[]> {
  const files: string[] = await fs.readdir("docs/posts");

  const posts: DocAttributes[] = [];

  for (const file of files) {
    const raw: string = await fs.readFile(`docs/posts/${file}`, "utf-8");
    const attributes: DocAttributes = fm(raw).attributes as DocAttributes;
    attributes.id = path.parse(file).name;
    posts.push(attributes);
  }

  return posts;
}

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
