import React from "react";
import { Button } from "react-bootstrap";
import styles from "./SubNav.module.scss";

interface Props {
  items: string[];
}

export default function SubNav({ items }: Props) {
  return (
    <>
      <div className={`d-flex flex-column ${styles.stickySideNav}`}>
        {items?.map?.((item: any, index: number) => {
          const id = `#${item.replaceAll(" ", "-")}`;
          return (
            <Button
              key={index}
              className={
                "bg-transparent py-2 border-0 rounded-0 rounded-start-5"
              }
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
