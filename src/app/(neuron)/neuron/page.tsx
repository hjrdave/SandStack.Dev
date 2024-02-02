import { Col, Row, Container, Button } from "react-bootstrap";
import CodeHighlighting from "@/components/atoms/CodeHighlighting";
import ParticleBG from "../_components/ParticleBG";
import SnippetSwitcher from "../_components/SnippetSwitcher";
import LandingLogo from "../_components/LandingLogo/LandingLogo";

export default function LandingPage() {
  return (
    <>
      <CodeHighlighting />

      <main style={{ height: "calc(100vh - 100px)" }}>
        <Container className={"h-100"}>
          <Row className={"h-100"}>
            <Col
              sm={12}
              lg={6}
              className={
                "d-flex align-items-center justify-content-center pb-0 pb-lg-5 pt-4 pt-lg-0"
              }
            >
              <LandingLogo />
            </Col>
            <Col sm={12} lg={6} className={"d-flex align-items-center pb-3"}>
              <div className={"w-100"}>
                <SnippetSwitcher />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <ParticleBG />
    </>
  );
}
