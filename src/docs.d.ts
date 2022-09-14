export interface DocAttributes {
  title: string;
  id: string;
  date: string;
  desc: string;
}

export interface Doc {
  attributes: DocAttributes;
  content: string;
}
