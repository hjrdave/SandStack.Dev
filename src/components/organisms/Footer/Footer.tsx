import { Container, Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Container fluid className={"pt-5"}>
        <Row>
          <Col className={"d-flex justify-content-center"}>
            <p className={"text-white"}>
              <small>Copyright 2024</small>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
