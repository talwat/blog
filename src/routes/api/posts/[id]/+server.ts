import { json, error, type RequestHandler } from "@sveltejs/kit";

import fs from "fs/promises";
import fm from "front-matter";
import { marked } from "marked";

export const GET: RequestHandler = async ({ params }) => {
  /** Error thrown by fs.readFile **/
  interface FSError {
    code: string;
  }

  const path: string = `posts/${params.id}.md`; // eslint-disable-line @typescript-eslint/restrict-template-expressions

  let raw: string;

  try {
    raw = await fs.readFile(path, "utf-8");
  } catch (err) {
    if (
      // Check for known 404 error
      (err as FSError).code !== undefined &&
      (err as FSError).code === "ENOENT"
    ) {
      throw error(404, JSON.stringify({ error: "Not found" }));
    } else {
      // No clue what the error is, throw it
      throw err;
    }
  }

  const frontMatter = fm(raw);

  /** Huge mess of parsing and appending and whatnot, should probably fix it later **/
  const renderer = {
    heading(text: string, level: number) {
      const headingIdRegex = /(?: +|^)\{#([a-z][\w-]*)\}(?: +|$)/i;
      const ids = text.match(headingIdRegex);
      const textWithoutID = text.replace(headingIdRegex, "");

      if (!ids) return false;

      const sections = level === 1 ? "" : "</section><section>"; // Close previous section and open a new one
      const headingAnchorImage = `<img class="heading-anchor-image" src="/blog/svg/link.svg">`;
      const headingAnchorText = `<h${level} id="${ids[1]}">${textWithoutID}</h${level}>`;
      const anchor = `<a class="heading-anchor" href="/blog/posts/${params.id as string}#${ids[1]}">${headingAnchorImage}${headingAnchorText}</a>`;

      return `${sections} ${anchor}`;
    },
  };

  marked.use({ renderer });

  const parsedHTML = marked.parse(frontMatter.body, {
    headerIds: false,
  });

  return json({
    content: `<section>${parsedHTML.trim()}</section>`,
    attributes: frontMatter.attributes,
  });
};
