import type { RequestHandler } from "@sveltejs/kit";
import { create } from "xmlbuilder2";
import type { DocAttributes } from "$ts/docs";
import { getPostList } from "$ts/get";
import { websiteURL } from "$src/ts/metadata";

export const prerender = true;

export const GET: RequestHandler = async () => {
  const posts: DocAttributes[] = await getPostList();

  const xml = create({ version: "1.0", encoding: "UTF-8" }).ele("urlset", {
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
  });

  function addLoc(loc: string, priority: number): void {
    xml
      .ele("url")
      .ele("loc")
      .txt(`${websiteURL}/${loc}`)
      .up()
      .ele("priority")
      .txt(priority.toString());
  }

  function addPostLoc(loc: string, priority: number, date: Date): void {
    xml
      .ele("url")
      .ele("loc")
      .txt(`${websiteURL}/${loc}`)
      .up()
      .ele("priority")
      .txt(priority.toString())
      .up()
      .ele("lastmod")
      .txt(date.toISOString());
  }

  for (const post of posts) {
    addPostLoc(`posts/${post.id}`, 0.8, new Date(post.date));
  }

  addLoc("about", 0.8);
  addLoc("", 0.6);

  return new Response(xml.end({ prettyPrint: true }));
};
