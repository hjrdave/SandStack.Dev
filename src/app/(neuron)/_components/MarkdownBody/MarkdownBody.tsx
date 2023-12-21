import { Suspense } from "react";
import MDXContent from "@/components/atoms/MdxContent";
import styles from "./MarkdownBody.module.scss";

interface Props {
  compiledSource: string;
  scope?: { [key: string]: any };
  frontmatter?: { [key: string]: any };
}

export default function MarkdownBody({
  compiledSource,
  scope,
  frontmatter,
}: Props) {
  return (
    <>
      <div className={styles.compContainer}>
        <Suspense fallback={<p>Loading....</p>}>
          <MDXContent
            compiledSource={compiledSource}
            scope={scope ?? {}}
            frontmatter={frontmatter ?? {}}
          />
        </Suspense>
      </div>
    </>
  );
}
