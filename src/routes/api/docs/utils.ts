import fm from "front-matter";
import hljs from "highlight.js";
import { marked } from "marked";
import type { Doc, DocAttributes } from "src/docs";

export function renderMd(id: string, raw: string): Doc {
  const frontMatter = fm(raw);

  /** Huge mess of parsing and appending and whatnot, should probably fix it later **/
  const renderer = {
    heading(text: string, level: number) {
      const textID = text.toLowerCase().replaceAll(" ", "-");

      const sections = level === 1 ? "" : "</section><section>"; // Close previous section and open a new one
      const headingAnchorText = `<h${level} id="${textID}" class="heading-anchor-txt">${text}</h${level}>`;
      const anchor = `<a class="heading-anchor" href="/blog/posts/${id}#${textID}">${headingAnchorText}</a>`;

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
