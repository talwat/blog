import { json, type RequestHandler } from "@sveltejs/kit";
import fs from "fs/promises";
import { renderMd } from "../utils";

export const GET: RequestHandler = async ({ params }) => {
  const path: string = `docs/about.md`;

  const raw: string = await fs.readFile(path, "utf-8");

  return json(renderMd(params.id as string, raw));
};
