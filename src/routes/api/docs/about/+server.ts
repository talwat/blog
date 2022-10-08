import { json, type RequestHandler } from "@sveltejs/kit";
import { getRawDoc, renderMd } from "$lib/utils";

export const GET: RequestHandler = async () => {
  const path: string = `docs/about.md`;
  const raw: string = await getRawDoc(path);

  return json(renderMd("about", raw));
};
