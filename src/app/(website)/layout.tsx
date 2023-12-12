import type { Metadata } from "next";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: "SandStack",
  description: "Projects and Tools by David A. Sanders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
