import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Col>
        <Row>
          <Col>{/**Logo */}</Col>
        </Row>
        <Row>
          <Col>{/**Projects */}</Col>
        </Row>
      </Col>
    </main>
  );
}
