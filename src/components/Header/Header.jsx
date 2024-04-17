import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import "./style.css";

export default function Header() {
  const location = useLocation();
  return (
    <Navbar
      expand='lg'
      className='bg-body-tertiary'
      bg='dark'
      data-bs-theme='dark'
    >
      <Container>
        <Navbar.Brand href='/'>GlaucoDetect</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto' defaultActiveKey={"/"}>
            <NavLink to='/' role='button' className='nav-link' tabIndex='0'>
              Home
            </NavLink>
            <NavLink
              to='/about'
              role='button'
              className='nav-link'
              tabIndex='1'
            >
              About
            </NavLink>
            <NavLink
              to='/contact'
              role='button'
              className='nav-link'
              tabIndex='2'
            >
              Contact Us
            </NavLink>
          </Nav>
          {location.pathname !== "/" && location.pathname !== "/predict" && (
            <Nav>
              <NavLink to='/predict' role='button' tabIndex='3'>
                <Button>Check your eye</Button>
              </NavLink>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
