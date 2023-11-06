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
          <Col className={"pt-3 d-flex justify-content-center"}>
            <div className={"d-flex align-items-center"}>
              <Image
                src="/Logo-Sandstack.webp"
                alt={"StandStack"}
                width={275}
                height={275}
              />
              <div className={"ps-4"}>
                <h1 style={{ fontSize: "4.5rem" }}>SandStack</h1>
                <div className={"border-bottom border-3"}></div>
                <p className={"pt-3"}>Nerd Free, Code Strong</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className="g-4 pt-5">
          <ProjectCards />
        </Row>
      </Col>
    </main>
  );
}
