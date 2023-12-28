import { Col, Row, Container, Button } from "react-bootstrap";
import CodeHighlighting from "@/components/atoms/CodeHighlighting";
import ParticleBG from "../_components/ParticleBG";
import NeuronLogo from "../../../../public/logo-neuron.webp";
import SnippetSwitcher from "../_components/SnippetSwitcher";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <CodeHighlighting />

      <main style={{ height: "calc(100vh - 100px)" }}>
        <Container className={" h-100"}>
          <Row className={"h-100"}>
            <Col
              className={
                "d-flex justify-content-center align-items-center pb-5"
              }
              //style={{ marginTop: "5rem" }}
            >
              <div>
                <div>
                  <Image
                    src={NeuronLogo}
                    width={225}
                    alt={"Neuron Global State Manager"}
                  />
                </div>
                <p
                  className={"mb-0 text-lowercase pt-2 text-center"}
                  style={{ fontSize: "4.25rem", lineHeight: "4.25rem" }}
                >
                  Neuron
                </p>
                <p className={"text-center"} style={{ fontSize: "1.35rem" }}>
                  Global State Manager
                </p>
              </div>
            </Col>
            <Col className={"d-flex align-items-center"}>
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
