import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function About() {
  return (
    <main className={"d-flex justify-content-center"}>
      <Col sm={10}>
        <Row>
          <Col className={"d-flex"}>
            <Image
              src={"/profile_pic.webp"}
              width={250}
              height={250}
              className={"rounded-circle"}
              alt={"David Sanders Profile Pic"}
            />
            <div className={"ps-5"}>
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
        <Row>
          <Col className={"d-flex flex-column align-items-center pt-5"}>
            <p className={"fs-3"}>Find Me On</p>
            <div className={"pt-3"}>
              <Link
                href={"https://www.linkedin.com/in/hjrdave"}
                target="_blank"
              >
                <i
                  className={`fa-brands fa-linkedin pe-3 ${styles.socialIcon} text-white`}
                ></i>
              </Link>
              <Link href={"https://github.com/hjrdave"} target="_blank">
                <i
                  className={`fa-brands fa-github ps-3 ${styles.socialIcon} text-white`}
                ></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
    </main>
  );
}
