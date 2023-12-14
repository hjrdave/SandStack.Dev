import { serialize } from "next-mdx-remote/serialize";

export const getMDXRemote = async (route: string) => {
  const res = await fetch(route, { next: { revalidate: 0 } });
  const mdxText = await res.text();
  const mdxSource = await serialize(mdxText, { parseFrontmatter: true });
  return mdxSource;
};
