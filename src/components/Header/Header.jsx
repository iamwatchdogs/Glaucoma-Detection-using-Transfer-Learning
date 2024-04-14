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
            <Nav.Link href='/'>
              <NavLink to='/'>Home</NavLink>
            </Nav.Link>
            <Nav.Link href='/about'>
              <NavLink to='/about'>About</NavLink>
            </Nav.Link>
            <Nav.Link href='/contact'>
              <NavLink to='/contact'>Contact Us</NavLink>
            </Nav.Link>
          </Nav>
          {location.pathname !== '/' && location.pathname !== '/predict' && (
            <Nav>
              <Button>
                <NavLink to='/predict'>Check your eye</NavLink>
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
