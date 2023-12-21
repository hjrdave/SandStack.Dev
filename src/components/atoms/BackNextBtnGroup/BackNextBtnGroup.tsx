import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from "./BackNextBtnGroup.module.scss";

interface Props {
  prevRoute?: {
    filename?: string;
    title?: string;
  };
  nextRoute?: {
    filename?: string;
    title?: string;
  };
}

export default function BackNextBtnGroup({ prevRoute, nextRoute }: Props) {
  return (
    <>
      <div className={"d-flex justify-content-between"}>
        {prevRoute ? (
          <Link
            href={`/neuron/docs/${prevRoute.filename}`}
            className={"text-decoration-none"}
          >
            <Button variant="outline-primary" className={styles.outlineBtn}>
              <i className="fa-solid fa-chevron-left pe-3"></i>
              {prevRoute?.title}
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
        {nextRoute ? (
          <Link
            href={`/neuron/docs/${nextRoute.filename}`}
            className={"text-decoration-none"}
          >
            <Button
              variant="outline-primary"
              className={`d-flex flex-column ${styles.outlineBtn}`}
            >
              <strong>
                <small>Vanilla:</small>
              </strong>
              <span className={"text-capitalize"}>
                {nextRoute?.title}
                <i className="fa-solid fa-chevron-right ps-3"></i>
              </span>
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
