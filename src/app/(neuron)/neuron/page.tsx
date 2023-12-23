import { Col, Row, Container, Button } from "react-bootstrap";
import CodeHighlighting from "@/components/atoms/CodeHighlighting";
import ParticleBG from "../_components/ParticleBG";
import NeuronLogo from "../../../../public/logo-neuron.webp";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <CodeHighlighting />

      <main>
        <Container style={{ marginTop: "4rem" }}>
          <Row>
            <Col className={"d-flex align-items-center justify-content-center"}>
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
            <Col>
              {/* <div className={"bg-black"}> */}
              <div className={"d-flex justify-content-end"}>
                <Button className={"me-2"}>Vanilla</Button>
                <Button>React</Button>
              </div>
              <pre className={"language-javascript"}>
                <code className={"language-javascript"}>
                  {`
import Neuron from "@sandstack/neuron";
const Store = Neuron.Store();

Store.add({
  key: "pokemon",
  state: "Pikachu",
});

Store.get("pokemon");
Store.set("pokemon", "Mewtwo");

onDispatch((payload) => {
  if (payload.key === "pokemon") {
    
  }
});
                      `}
                </code>
              </pre>

              {/* </div> */}
            </Col>
          </Row>
        </Container>
      </main>
      <ParticleBG />
    </>
  );
}
