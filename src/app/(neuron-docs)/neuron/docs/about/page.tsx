import { Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import type { Metadata } from "next";
import MDXContent from "@/components/atoms/MdxContent";
import { getNeuronDocs } from "@/lib/services/get-neuron-docs";
export const metadata: Metadata = {
  title: "About | Neuron",
  description: "Documentation for the Neuron Global State Manager library.",
};
export default async function About() {
  const mdxSource = await getNeuronDocs("about");
  return (
    <main>
      <Col>
        <Row>
          <Col>
            <Suspense fallback={<p>Loading....</p>}>
              <MDXContent {...mdxSource} />
            </Suspense>
          </Col>
        </Row>
      </Col>
    </main>
  );
}
