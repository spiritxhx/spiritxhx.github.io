import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../style/navComponent.scss";

export default function NavComponent() {
  return (
    // <div className="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light fixed-top justify-content-between">
    //   <a className="navbar-brand" href="/">
    //     Hans(Hanxiang) Xu
    //   </a>

    // </div>
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      className="d-flex justify-content-between big-nav"
    >
      <Navbar.Brand href="/">Hans(Hanxiang) Xu</Navbar.Brand>
      <Navbar.Collapse id="collapse-nav" className="text-right d-flex">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="https://resume.creddle.io/resume/ao5zzbuepvb">
          Resume
        </Nav.Link>
        <Nav.Link href="/">Project</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
