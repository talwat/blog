import { json, type RequestHandler } from "@sveltejs/kit";
import { getRawDoc } from "$ts/get";
import { render } from "$ts/md";

export const GET: RequestHandler = async () => {
  const path: string = `docs/about.md`;
  const raw: string = await getRawDoc(path);

  return json(render("about", raw));
};
