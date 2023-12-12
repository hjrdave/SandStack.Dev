import { Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import MDXContent from "@/components/atoms/MdxContent";
import { getNeuronDocs } from "@/lib/services/get-neuron-docs";

export default async function AboutPage() {
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
