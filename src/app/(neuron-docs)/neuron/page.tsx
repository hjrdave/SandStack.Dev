import { Col, Row, Container } from "react-bootstrap";
import CodeHighlighting from "@/components/atoms/CodeHighlighting";

export default function LandingPage() {
  return (
    <>
      <CodeHighlighting />
      <main>
        <Container>
          <Row>
            <Col>
              <p>Neuron Landing Page</p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
