import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, Row, Col } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neuron | Sandstack",
  description: "Documentation for the Neuron Global State Manager library.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container fluid>{children}</Container>
    </>
  );
}
