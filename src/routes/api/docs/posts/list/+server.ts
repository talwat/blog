import { json, type RequestHandler } from "@sveltejs/kit";
import { getListOfPosts } from "$lib/utils";

export const GET: RequestHandler = async () => {
  const posts = await getListOfPosts();

  return json(posts);
};
