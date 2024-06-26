"use client";
import { Col, Row, Container, Button } from "react-bootstrap";
import Link from "next/link";
import CodeHighlighting from "@/components/atoms/CodeHighlighting";
import ParticleBG from "../_components/ParticleBG";
import SnippetSwitcher from "../_components/SnippetSwitcher";
import LandingLogo from "../_components/LandingLogo/LandingLogo";
import useClipboard from "@/hooks/useClipboard";

export default function LandingPage() {
  const { copyToClipboard } = useClipboard();
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
                "d-flex flex-column align-items-center justify-content-center pb-0 pb-lg-5 pt-4 pt-lg-0"
              }
            >
              <LandingLogo />
              <div>
                <Button
                  className={"me-2 bg-dark text-white"}
                  onClick={() => copyToClipboard("npm i @sandstack/neuron")}
                >
                  <code className={"text-white pe-3"}>
                    <span style={{ color: "#adb5bd" }}>$</span> npm i
                    @sandstack/neuron
                  </code>

                  <i
                    className="fa-regular fa-copy"
                    style={{ color: "#adb5bd" }}
                  ></i>
                </Button>
                <Link href={"neuron/docs/introduction"}>
                  <Button>Read Docs</Button>
                </Link>
              </div>
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
