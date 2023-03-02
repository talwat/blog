import fm from "front-matter";

export interface DocAttributes {
  title: string;
  path: string;
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

export function getAttributes(raw: string): DocAttributes {
  const attributes = fm(raw).attributes as DocAttributes;

  if (!attributes.longDesc) {
    attributes.longDesc = attributes.desc;
  }

  return attributes;
}
