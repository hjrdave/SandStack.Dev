import Image from "next/image";
import { Col, Row } from "react-bootstrap";

export default function About() {
  return (
    <main>
      <Col>
        <Row>
          <Col>
            <p className={"text-white"}>About</p>
          </Col>
        </Row>
      </Col>
    </main>
  );
}