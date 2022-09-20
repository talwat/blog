export interface DocAttributes {
  title: string;
  id: string;
  date: string;
  desc: string;
  longDesc: string;
  tags: string[];
}

export interface Doc {
  attributes: DocAttributes;
  content: string;
}
