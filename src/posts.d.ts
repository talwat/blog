export interface PostAttributes {
  title: string;
  id: string;
  date: string;
  desc: string;
}

export interface Post {
  attributes: PostAttributes;
  content: string;
}
