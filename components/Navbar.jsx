import React from 'react'
import {Container, Stack, Navbar, Nav} from "react-bootstrap";
import Link from "next/link";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="mb-3">
      <Container>
        <Navbar.Brand href="/">Cup-Cup</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar;