"use client";
import { MDXRemote } from "next-mdx-remote";
interface Props {
  compiledSource: string;
  scope: { [key: string]: any };
  frontmatter: { [key: string]: any };
}
export default function MDXContent({
  compiledSource,
  scope,
  frontmatter,
}: Props) {
  return (
    <>
      <MDXRemote
        frontmatter={frontmatter}
        compiledSource={compiledSource}
        scope={scope}
        components={{
          h2: (props) => {
            return (
              <h2
                id={props.children?.toString().replaceAll(" ", "-")}
                style={{ scrollMarginTop: "5.5rem" }}
              >
                {props.children}
              </h2>
            );
          },
        }}
      />
    </>
  );
}
