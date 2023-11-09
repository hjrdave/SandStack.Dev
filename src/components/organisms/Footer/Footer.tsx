import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Container fluid className={"pt-5"}>
        <Row>
          <Col className={"d-flex flex-column align-items-center pt-5"}>
            <p className={"fs-5"}>Find Me On</p>
            <div className={"pt-2"}>
              <Link
                href={"https://www.linkedin.com/in/hjrdave"}
                target="_blank"
              >
                <i
                  className={`fa-brands fa-linkedin pe-2 ${styles.socialIcon} text-white`}
                ></i>
              </Link>
              <Link href={"https://github.com/hjrdave"} target="_blank">
                <i
                  className={`fa-brands fa-github ps-2 ${styles.socialIcon} text-white`}
                ></i>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={"d-flex justify-content-center pt-4"}>
            <p>
              <small>&#169; Copyright David A. Sanders {currentYear}</small>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
