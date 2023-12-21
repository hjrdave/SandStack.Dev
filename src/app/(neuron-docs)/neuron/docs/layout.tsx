import type { Metadata } from "next";
import { getNeuronIndex } from "@/lib/services/get-neuron-index";
import { Container, Row, Col } from "react-bootstrap";
import SideNav from "@/app/(neuron-docs)/_components/SideNav";
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
          <Col sm={2} className={"ps-0"}>
            <SideNav navItems={navIndex} />
          </Col>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  );
}
