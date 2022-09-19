import { json, type RequestHandler } from "@sveltejs/kit";
import { getListOfPosts } from "$lib/utils";

/**
 * DO NOT USE THIS ENDPOINT FOR OTHER API ENDPOINTS IN THIS PROJECT, instead use utils.getListOfPosts
 */
export const GET: RequestHandler = async () => {
  const posts = await getListOfPosts();

  return json(posts);
};
