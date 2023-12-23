import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from "./BackNextBtnGroup.module.scss";

interface Props {
  prevRoute?: {
    section?: string;
    filename?: string;
    title?: string;
  };
  nextRoute?: {
    section?: string;
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
            className={"text-decoration-none w-100"}
          >
            <Button
              variant="outline-primary w-100"
              className={`d-flex flex-column align-items-start ${styles.outlineBtn}`}
            >
              <span className={"d-flex align-items-end fw-bold"}>
                <small>Vanilla</small>
              </span>
              <span className={"text-capitalize pt-3 fs-4"}>
                <i className="fa-solid fa-chevron-left pe-3"></i>
                {prevRoute?.title}
              </span>
            </Button>
          </Link>
        ) : (
          <div className={"w-100"}></div>
        )}
        {nextRoute ? (
          <Link
            href={`/neuron/docs/${nextRoute.filename}`}
            className={"text-decoration-none w-100"}
          >
            <Button
              variant="outline-primary"
              className={`d-flex flex-column align-items-end w-100 ${styles.outlineBtn}`}
            >
              <span className={"d-flex align-items-start fw-bold"}>
                <small>Vanilla</small>
              </span>
              <span className={"text-capitalize pt-3 fs-4"}>
                {nextRoute?.title}
                <i className="fa-solid fa-chevron-right ps-3"></i>
              </span>
            </Button>
          </Link>
        ) : (
          <div className={"w-100"}></div>
        )}
      </div>
    </>
  );
}
