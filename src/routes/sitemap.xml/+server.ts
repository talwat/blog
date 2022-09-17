import type { RequestHandler } from "@sveltejs/kit";
import { create } from "xmlbuilder2";
import type { DocAttributes } from "src/docs";
import { getListOfPosts } from "$lib/utils";

export const prerender = true;

export const GET: RequestHandler = async () => {
  const posts: DocAttributes[] = await getListOfPosts();

  const xml = create({ version: "1.0", encoding: "UTF-8" }).ele("urlset", {
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
  });

  function addLoc(url: string, priority: number): void {
    xml
      .ele("url")
      .ele("loc")
      .txt(url)
      .up()
      .ele("priority")
      .txt(priority.toString());
  }

  function addPostLoc(url: string, priority: number, date: Date): void {
    xml
      .ele("url")
      .ele("loc")
      .txt(url)
      .up()
      .ele("priority")
      .txt(priority.toString())
      .up()
      .ele("lastmod")
      .txt(date.toISOString());
  }

  for (const post of posts) {
    addPostLoc(`blog/posts/${post.id}`, 0.8, new Date(post.date));
  }

  addLoc("blog/about", 0.8);

  return new Response(xml.end({ prettyPrint: true }));
};