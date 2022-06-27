import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useRouter } from "next/router";

const CustomNavbar = () => {
  const router = useRouter();
  const backToHomePage = () => {
    router.push("/");
  };
  const goToAboutPage = () => {
    router.push("/about");
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      className="mb-3"
    >
      <Container>
        <Navbar.Brand href="/">Cup-Cup</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={backToHomePage}>Home</Nav.Link>
            <Nav.Link onClick={goToAboutPage}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
