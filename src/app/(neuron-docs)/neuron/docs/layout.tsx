import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, Row, Col } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Docs | Neuron",
  description: "Documentation for the Neuron Global State Manager library.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={3}>
            <p>Nav</p>
          </Col>
          <Col>{children}</Col>
          <Col sm={3}>
            <p>Sub Nav</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
