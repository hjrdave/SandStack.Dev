import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, Row, Col, SSRProvider } from "react-bootstrap";
import "./globals.scss";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Container>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
        <Footer />
      </body>
    </html>
  );
}
