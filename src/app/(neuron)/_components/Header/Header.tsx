"use client";
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import SandStackLogo from "../../../../../public/Logo-Sandstack.webp";
import NeuronLogo from "../../../../../public/logo-neuron.webp";
import Sticky from "react-stickynode";
interface Props {}
export default function Header({}: Props) {
  return (
    <>
      <Sticky
        enabled={true}
        innerActiveClass={"bg-dark shadow shadow-1"}
        innerZ={1000}
      >
        <Navbar expand="lg">
          <Container fluid className={"py-2"}>
            <Navbar.Brand className={"ps-3"}>
              <Link
                href={"/neuron"}
                className={"d-flex text-white text-decoration-none"}
              >
                <Image src={NeuronLogo} width={35} alt={"Neuron Logo"} />
                <p className={"mb-0 ps-2"}>neuron</p>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto w-100 d-flex justify-content-end">
                <div className={"border-top mt-3 mb-3 d-lg-none"}></div>
                <Nav.Item className={""}>
                  <Link
                    href={"/neuron/docs/introduction"}
                    className="text-decoration-none text-white"
                  >
                    Learn
                  </Link>
                </Nav.Item>
                <div className={"border-end mx-3 d-none d-lg-block"}></div>
                <div className={"border-top mt-3 d-lg-none"}></div>
                <div className={"d-flex justify-content-end pt-3 pt-lg-0"}>
                  <Nav.Item className={"pe-4 fw-semibold"}>
                    <a
                      href={"https://www.npmjs.com/package/@sandstack/neuron"}
                      className="text-decoration-none"
                    >
                      <i className="fa-brands fa-npm fs-3 text-white"></i>
                    </a>
                  </Nav.Item>
                  <Nav.Item className={"pe-4 fw-semibold"}>
                    <a
                      href={"https://github.com/hjrdave/Neuron"}
                      className="text-decoration-none"
                    >
                      <i className="fa-brands fa-github fs-3 text-white"></i>
                    </a>
                  </Nav.Item>
                  <Nav.Item className={"pe-4 fw-semibold"}>
                    <Link href={"/"} className="text-decoration-none">
                      <Image src={SandStackLogo} width={30} alt={"sandstack"} />
                    </Link>
                  </Nav.Item>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Sticky>
    </>
  );
}
