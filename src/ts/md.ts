import fm from "front-matter";
import hljs from "highlight.js";
import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import type { Doc, DocAttributes } from "$ts/docs";
import { base } from "$app/paths";

/**
 * Renders a raw document into markdown.
 * @param id The ID of the post.
 * @param raw The raw content of the post.
 * @param path The path/url to the post.
 * @returns The rendered document with the attributes.
 */
export function render(id: string, raw: string, path: string = id): Doc {
  const frontMatter = fm(raw);

  const renderer = {
    heading(text: string, level: number) {
      const textID = text
        .toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll("`", "")
        .replaceAll("'", "")
        .replaceAll("*", "")
        .replaceAll("_", "")
        .replaceAll("&", "")
        .replaceAll("!", "")
        .replaceAll("?", "");

      const sections = level === 1 ? "" : "</section><section>"; // Close previous section and open a new one

      // Put a heading with a level, ID, and class to make it an anchor.
      const headingAnchorText = `<h${level} id="${textID}" class="heading-anchor-txt">${text}</h${level}>`;

      // Then, each heading has an anchor which links to its part.
      // The heading is nested inside the anchor. All of this allows it to be clickable, so you can get a link to a certain heading.
      const anchor = `<a class="heading-anchor" href="${base}/${path}#${textID}">${headingAnchorText}</a>`;

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
    mangle: false,
  });

  const attributes = frontMatter.attributes as DocAttributes;

  attributes.id = id;
  attributes.path = path;

  return {
    content: `<section>${parsedHTML.trim()}</section>`,
    attributes: attributes,
  };
}
