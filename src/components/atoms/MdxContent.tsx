"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default function MDXContent(props: MDXRemoteSerializeResult) {
  return (
    <>
      <MDXRemote
        {...props}
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
