import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, Row, Col } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Neuron",
  description: "Documentation for the Neuron Global State Manager library.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            className={
              "p-3 shadow shadow-1 d-flex justify-content-start align-items-center"
            }
          >
            <p className={"mb-0"}>Neuron</p>
          </Col>
        </Row>
        {children}
      </Container>
    </>
  );
}
