import fm from "front-matter";
import hljs from "highlight.js";
import { marked } from "marked";
import fs from "fs/promises";
import path from "path";
import type { Doc, DocAttributes } from "src/docs";

export function renderMd(id: string, raw: string): Doc {
  const frontMatter = fm(raw);

  /** Huge mess of parsing and appending and whatnot, should probably fix it later */
  const renderer = {
    heading(text: string, level: number) {
      const textID = text.toLowerCase().replaceAll(" ", "-");

      const sections = level === 1 ? "" : "</section><section>"; // Close previous section and open a new one
      const headingAnchorText = `<h${level} id="${textID}" class="heading-anchor-txt">${text}</h${level}>`;
      const anchor = `<a class="heading-anchor" href="/${id}#${textID}">${headingAnchorText}</a>`;

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

  return {
    content: `<section>${parsedHTML.trim()}</section>`,
    attributes: frontMatter.attributes as DocAttributes,
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
