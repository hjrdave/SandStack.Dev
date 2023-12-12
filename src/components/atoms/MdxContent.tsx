"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default function MDXContent(props: MDXRemoteSerializeResult) {
  return (
    <>
      <MDXRemote {...props} />
    </>
  );
}
