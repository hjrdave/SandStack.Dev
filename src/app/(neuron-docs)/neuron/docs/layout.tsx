import { Fragment, Children, cloneElement } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getNeuronIndex } from "@/lib/services/get-neuron-index";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Collapsible from "@/components/atoms/Collapsible";
import Sticky from "react-stickynode";
import styles from "../../neuron.module.scss";

export const metadata: Metadata = {
  title: "Neuron",
  description: "Documentation for the Neuron Global State Manager library.",
};

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navIndex = await getNeuronIndex();
  return (
    <>
      <Container fluid className={`pt-4 ${styles.markdownBody}`}>
        <Row>
          <Col sm={2} className={"ps-4 "}>
            <div
              className={`d-flex flex-column align-items-start ${styles.stickySideNav}`}
            >
              {navIndex.map((item, index) => (
                <Fragment key={index}>
                  {item.filename ? (
                    <Button
                      variant="link"
                      className={`text-decoration-none px-0 mb-2`}
                    >
                      <Link
                        href={`/neuron/docs/${item.filename}`}
                        className={`text-decoration-none text-white`}
                      >
                        <strong>{item.section}</strong>
                      </Link>
                    </Button>
                  ) : (
                    <Collapsible
                      label={item.section}
                      labelClassName={`fw-bold mb-2 text-white`}
                    >
                      {item.items
                        ? item.items.map((item, index) => (
                            <p key={index} className={"ps-2"}>
                              <Link
                                href={`/neuron/docs/${item.filename}`}
                                className={`text-decoration-none text-white`}
                              >
                                {item.title}
                              </Link>
                            </p>
                          ))
                        : null}
                    </Collapsible>
                  )}
                </Fragment>
              ))}
            </div>
          </Col>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  );
}
