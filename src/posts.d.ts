export interface PostAttributes {
  name: string;
  id: string;
  date: string;
  desc: string;
}

export interface Post {
  attributes: PostAttributes;
  content: string;
}
