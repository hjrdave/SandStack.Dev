import {
  Card,
  Col,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCards() {
  const data = [
    {
      icon: (
        <>
          <i
            className="fa-brands fa-react"
            style={{ fontSize: "5rem", color: "#2291c0" }}
          ></i>
        </>
      ),
      title: "Neuron",
      lede: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      route: "/neuron",
    },
    {
      icon: (
        <>
          <i
            className="fa-brands fa-react"
            style={{ fontSize: "5rem", color: "#2291c0" }}
          ></i>
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
      route: "rental-dvd-api",
    },
    {
      icon: (
        <>
          <i
            className="fa-brands fa-react"
            style={{ fontSize: "5rem", color: "#2291c0" }}
          ></i>
        </>
      ),
      title: "Neuron DevTools",
      lede: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      route: "neuron-devtools",
    },
    {
      icon: (
        <>
          <Image
            src={"/logo-treble-gsm.webp"}
            alt={"TrebleGSM"}
            width={85}
            height={85}
          />
        </>
      ),
      title: "TrebleGSM",
      lede: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      route: "https://treblegsm.org/",
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
              <CardText as={"div"}>
                <p className={"text-center pt-3"}>
                  <strong>{card.title}</strong>
                </p>
                <p>{card.lede}</p>
                <div className={"d-flex justify-content-center"}>
                  <Link href={card.route ?? ""} target={"_blank"}>
                    <Button as={"span"} variant={"secondary"}>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
}
