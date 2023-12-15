import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getNeuronIndex } from "@/lib/services/get-neuron-index";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Collapsible from "@/components/atoms/Collapsible";

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
      <Container fluid className={"pt-4"}>
        <Row>
          <Col sm={2} className={"d-flex flex-column align-items-start"}>
            {navIndex.map((item, index) => (
              <Fragment key={index}>
                {item.filename ? (
                  <Button
                    variant="link"
                    className={`text-decoration-none px-0`}
                  >
                    <Link
                      href={`/neuron/docs/${item.filename}`}
                      className={"text-decoration-none"}
                    >
                      <strong>{item.section}</strong>
                    </Link>
                  </Button>
                ) : (
                  <Collapsible label={item.section} labelClassName={"fw-bold"}>
                    {item.items
                      ? item.items.map((item, index) => (
                          <p key={index} className={"ps-2 mb-2"}>
                            <Link
                              href={`/neuron/docs/${item.filename}`}
                              className={"text-decoration-none"}
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
          </Col>
          {children}
        </Row>
      </Container>
    </>
  );
}
