import { json, type RequestHandler } from "@sveltejs/kit";
import fs from "fs/promises";
import { renderMd } from "$lib/utils";

export const GET: RequestHandler = async () => {
  const path: string = `docs/about.md`;

  const raw: string = await fs.readFile(path, "utf-8");

  return json(renderMd("about", raw));
};
