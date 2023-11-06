"use client";
import {
  Card,
  Col,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function ProjectCards() {
  const router = useRouter();

  const data = [
    {
      icon: (
        <>
          <i className="fa-brands fa-react" style={{ fontSize: "5rem" }}></i>
        </>
      ),
      title: "Neuron",
      lede: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      route: "",
    },
    {
      icon: (
        <>
          <i className="fa-brands fa-react" style={{ fontSize: "5rem" }}></i>
        </>
      ),
      title: "DuelCalculatorJS",
      lede: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      route: "https://hjrdave.github.io/DuelCalculator/",
    },
    {
      icon: (
        <>
          <i className="fa-solid fa-database" style={{ fontSize: "4rem" }}></i>
        </>
      ),
      title: "RentalDVD API",
      lede: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      route: "",
    },
    {
      icon: (
        <>
          <i className="fa-brands fa-react" style={{ fontSize: "5rem" }}></i>
        </>
      ),
      title: "Neuron DevTools",
      lede: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      route: "",
    },
    {
      icon: (
        <>
          <i className="fa-brands fa-react" style={{ fontSize: "5rem" }}></i>
        </>
      ),
      title: "TrebleGSM",
      lede: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      route: "/treble-gsm",
    },
  ];
  return (
    <>
      {data.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <CardBody>
              <CardTitle className="d-flex justify-content-center">
                {card.icon}
              </CardTitle>
              <CardText>
                <p className={"text-center pt-3"}>
                  <strong>{card.title}</strong>
                </p>
                <p>{card.lede}</p>
                <div className={"d-flex justify-content-center"}>
                  <Button
                    variant={"secondary"}
                    onClick={() => router.push(card.route ?? "", {})}
                  >
                    Learn More
                  </Button>
                </div>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
}
