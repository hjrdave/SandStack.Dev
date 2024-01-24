import React from "react";
import Link from "next/link";
import { Button, Row, Col } from "react-bootstrap";
import styles from "./BackNextBtnGroup.module.scss";

interface Props {
  prevRoute?: {
    parent?: string;
    filename?: string;
    title?: string;
  };
  nextRoute?: {
    parent?: string;
    filename?: string;
    title?: string;
  };
}

export default function BackNextBtnGroup({ prevRoute, nextRoute }: Props) {
  return (
    <>
      <Row>
        <Col sm={12} lg={6}>
          {prevRoute ? (
            <Link
              href={`/neuron/docs/${prevRoute.filename}`}
              className={"text-decoration-none w-100"}
            >
              <Button
                variant="outline-primary w-100"
                className={`d-flex flex-column align-items-center align-items-lg-start ${styles.outlineBtn}`}
              >
                <span className={"d-flex align-items-end fw-bold"}>
                  <small>{prevRoute.parent}</small>
                </span>
                <span className={"text-capitalize pt-3 fs-4"}>
                  <i className="fa-solid fa-chevron-left pe-3"></i>
                  {prevRoute?.title}
                </span>
              </Button>
            </Link>
          ) : null}
        </Col>
        <Col sm={12} lg={6}>
          {nextRoute ? (
            <Link
              href={`/neuron/docs/${nextRoute.filename}`}
              className={"text-decoration-none w-100"}
            >
              <Button
                variant="outline-primary"
                className={`d-flex flex-column align-items-center align-items-lg-end w-100 ${styles.outlineBtn}`}
              >
                <span className={"d-flex align-items-start fw-bold"}>
                  <small>{nextRoute.parent}</small>
                </span>
                <span className={"text-capitalize pt-3 fs-4"}>
                  {nextRoute?.title}
                  <i className="fa-solid fa-chevron-right ps-3"></i>
                </span>
              </Button>
            </Link>
          ) : null}
        </Col>
      </Row>
    </>
  );
}
