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
          <>
            <Image
              src={"/logo-neuron.webp"}
              alt={"Neuron State Manager"}
              width={85}
              height={85}
            />
          </>
        </>
      ),
      title: "Neuron",
      lede: "Neuron is a lightweight framework agnostic global state manager for Javascript apps, with React support.",
      route: "/neuron",
    },
    {
      icon: (
        <>
          <>
            <Image
              src={"/neuron-devtools.webp"}
              alt={"Neuron Devtools"}
              width="0"
              height="0"
              sizes={"100vh"}
              style={{ width: "180px", height: "auto" }}
            />
          </>
        </>
      ),
      title: "Neuron Devtools",
      lede: "Official devtools for the Neuron global state manager.",
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
      lede: "A duel calculator web app for the Yugioh Trading Card Game.",
      route: "https://hjrdave.github.io/DuelCalculator/",
    },
    {
      icon: (
        <>
          <i className="fa-solid fa-database" style={{ fontSize: "4rem" }}></i>
        </>
      ),
      title: "RentalDVD API",
      lede: "This is a REST testing API based on the DVD Rental Database.",
      route: "rental-dvd-api",
    },
    {
      icon: (
        <>
          <i
            className="fa-solid fa-screwdriver-wrench"
            style={{ fontSize: "5rem", color: "#2291c0" }}
          ></i>
        </>
      ),
      title: "Neuron DevTools",
      lede: "Chrome devtools extension for the Neuron Global State Manager.",
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
      lede: "A React global state manager with a simple API that uses React Hooks.",
      route: "https://treblegsm.org/",
    },
  ];
  return (
    <>
      {data.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <div className={"border-5 border-top border-primary rounded"}>
              <CardBody className={"p-5"}>
                <CardTitle className="d-flex justify-content-center">
                  {card.icon}
                </CardTitle>
                <CardText as={"div"}>
                  <p className={"text-center pt-3"}>
                    <strong>{card.title}</strong>
                  </p>
                  <p className={"text-center"}>{card.lede}</p>
                  <div className={"d-flex justify-content-center"}>
                    <Link href={card.route ?? ""}>
                      <Button as={"span"} variant={"secondary"}>
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardText>
              </CardBody>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
}
