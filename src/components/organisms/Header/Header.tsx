"use client";
import React from "react";
import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import Link from "next/link";

interface Props {}
export default function Header({}: Props) {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={"m-auto w-100 d-flex justify-content-end py-3"}>
              <Nav.Item className={"pe-3 fw-semibold"}>
                <Link href={"/"} className="text-decoration-none">
                  Home
                </Link>
              </Nav.Item>
        <Nav.Item className={"pe-3 fw-semibold"}>
                <Link href={"/about"} className="text-decoration-none">
                  About
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}
