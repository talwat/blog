import { json, type RequestHandler } from "@sveltejs/kit";
import { getPostList } from "$ts/get";

export const GET: RequestHandler = async () => {
  const posts = await getPostList();

  return json(posts);
};
