import { Col, Row, Container } from "react-bootstrap";
import CodeHighlighting from "@/components/atoms/CodeHighlighting";
import ParticleBG from "../_components/ParticleBG";
import NeuronLogo from "../../../../public/logo-neuron.webp";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <CodeHighlighting />

      <main>
        <Container>
          <Row>
            <Col className={""} style={{ paddingTop: "10rem" }}>
              <div className={"d-flex flex-column align-content-center"}>
                <div className={"d-flex justify-content-center"}>
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
            <Col></Col>
          </Row>
        </Container>
      </main>
      <ParticleBG />
    </>
  );
}
