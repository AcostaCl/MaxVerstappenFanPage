import { Nav, Navbar, Container } from "react-bootstrap";
import "../styles/menu.css";
import React, { useEffect, useState } from "react";
const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="#">
          <span className="red-bull-logo me-2">RB</span>
          <span className="brand-text">VERSTAPPEN</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav-link-custom">
              Inicio
            </Nav.Link>
            <Nav.Link href="#biografia" className="nav-link-custom">
              Biografia
            </Nav.Link>
            <Nav.Link href="#estadisticas" className="nav-link-custom">
              Estadisticas
            </Nav.Link>
            <Nav.Link href="#galeria" className="nav-link-custom">
              Galeria
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
