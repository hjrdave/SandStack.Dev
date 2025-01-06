import type { Metadata } from "next";
import { getNeuronIndex } from "@/lib/services/get-neuron-index";
import { Container, Row, Col, Alert } from "react-bootstrap";
import SideNav from "@/app/(neuron)/_components/SideNav";
import Footer from "@/components/organisms/Footer";
import styles from "@/app/(neuron)/_components/SideNav/SideNav.module.scss";

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
      <Container fluid className={`pt-4`}>
        <Row>
          <Col sm={12} md={2} className={`ps-0`}>
            <SideNav navItems={navIndex} />
          </Col>
          <Col sm={12} md={10}>
            <Row>
              <Col>
                <Alert>
                  Neuron is still in active development and should not be used
                  in production. Feel free to play around with it and submit an{" "}
                  <a
                    target={"_blank"}
                    href={"https://github.com/hjrdave/Neuron/issues"}
                  >
                    issue
                  </a>
                  .
                </Alert>
              </Col>
            </Row>
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
