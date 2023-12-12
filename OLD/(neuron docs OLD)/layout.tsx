import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import "../../globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neuron | Sandstack",
  description: "Documentation for the Neuron Global State Manager library.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-bs-theme="dark">
      <Script src="https://kit.fontawesome.com/bc8edc6f62.js" />
      <body className={`${inter.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
