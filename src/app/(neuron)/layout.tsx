import type { Metadata } from "next";
import Header from "@/app/(neuron)/_components/Header";

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
      <Header />
      {children}
    </>
  );
}
