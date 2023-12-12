import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "react-bootstrap";

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
      <Container fluid>{children}</Container>
    </>
  );
}
