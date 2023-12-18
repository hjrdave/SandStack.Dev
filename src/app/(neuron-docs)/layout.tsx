import type { Metadata } from "next";
import DocsHeader from "@/components/organisms/DocsHeader";
import Footer from "@/components/organisms/Footer";

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
      <DocsHeader />
      {children}
      <Footer />
    </>
  );
}
