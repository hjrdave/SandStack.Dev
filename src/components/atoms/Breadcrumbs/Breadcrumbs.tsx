import React from "react";
import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";

interface Props {
  section?: string;
  currentPage?: string;
}

export default function Breadcrumbs({ section, currentPage }: Props) {
  return (
    <>
      <div>
        <p className={styles.compContainer}>
          <Link href={"/neuron"}>Home</Link> /{" "}
          <span className={"text-capitalize"}>{section}</span>{" "}
          {section?.toLowerCase() !== currentPage?.toLowerCase() ? (
            <>
              / <span className={"text-capitalize"}>{currentPage}</span>
            </>
          ) : null}
        </p>
      </div>
    </>
  );
}
