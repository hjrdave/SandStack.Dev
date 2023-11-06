import Image from "next/image";
import { Col, Row, Card, CardTitle } from "react-bootstrap";
import CardBody from "react-bootstrap/CardBody";
import CardText from "react-bootstrap/CardText";
import ProjectCards from "@/components/organisms/ProjectCards/ProjectCards";
import Script from "next/script";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Col>
        <Row>
          <Col className={"d-flex justify-content-center pt-5"}>
            <i
              className="fa-brands fa-wordpress text-white"
              style={{ fontSize: "10rem" }}
            ></i>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className="g-4 pt-5">
          <ProjectCards />
        </Row>
      </Col>
    </main>
  );
}
