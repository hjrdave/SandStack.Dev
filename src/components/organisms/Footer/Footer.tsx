import { Container, Col, Row } from "react-bootstrap";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Container fluid className={"pt-5"}>
        <Row>
          <Col className={"d-flex justify-content-center"}>
            <p>
              <small>&#169; Copyright {currentYear}</small>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
