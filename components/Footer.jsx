import React from 'react'
import {Container, Stack, Navbar, Nav} from "react-bootstrap";
import Link from "next/link";

const CustomFooter = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mt-auto">
    <Container>
    <Navbar.Brand href="#home">Cup-Cup</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link>Details</Nav.Link>
        <Nav.Link>Company</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Container>
  </Navbar>
  )
}

export default CustomFooter;