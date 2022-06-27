import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const CustomFooter = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mt-auto"
    >
      <Container>
        <Navbar.Brand href="#home">Cup-Cup</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Details</Nav.Link>
          <Nav.Link href="#">Company</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomFooter;
