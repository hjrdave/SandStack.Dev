import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function About() {
  return (
    <main className={"d-flex justify-content-center"}>
      <Col sm={12} lg={10}>
        <Row>
          <Col
            className={
              "d-flex flex-column align-items-center flex-lg-row align-items-lg-start"
            }
          >
            <Image
              src={"/profile_pic.webp"}
              width={250}
              height={250}
              className={"rounded-circle"}
              alt={"David Sanders Profile Pic"}
            />
            <div className={"ps-5 pt-5 pt-lg-0"}>
              <h1>David A. Sanders</h1>
              <p>
                <small>
                  Software
                  Engineer&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Dad&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Lover
                  of Coffee&nbsp;☕
                </small>
              </p>
              <div className={"border-bottom border-2 border-secondary"}></div>
              <p className={"pt-3"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </main>
  );
}
