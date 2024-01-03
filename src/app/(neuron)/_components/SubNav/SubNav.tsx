"use client";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import useScrollToId from "@/hooks/useScrollToId";
import useNonInitialEffect from "@/hooks/useNonInitialEffect";
import styles from "./SubNav.module.scss";

interface Props {
  items: string[];
  markdownBodyContainerId: string;
}

export default function SubNav({ items, markdownBodyContainerId }: Props) {
  const { currentId } = useScrollToId({
    tag: "h2",
  });

  return (
    <>
      <div className={`d-flex flex-column ${styles.sticky}`}>
        {items?.map?.((item: any, index: number) => {
          const id = `#${item.replaceAll(" ", "-")}`;
          const scrollToId = `#${currentId}`;
          return (
            <Button
              key={index}
              className={`${
                scrollToId === id ? styles.active : "bg-transparent"
              } py-2 border-0 rounded-0 rounded-start-5`}
            >
              <a
                href={id}
                className={
                  "text-decoration-none text-white d-flex justify-content-start"
                }
              >
                <small>{item}</small>
              </a>
            </Button>
          );
        })}
      </div>
    </>
  );
}
