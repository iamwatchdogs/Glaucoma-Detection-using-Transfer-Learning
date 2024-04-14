import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './style.css';

export default function Header() {
  return (
    <Navbar
      expand='lg'
      className='bg-body-tertiary'
      bg='dark'
      data-bs-theme='dark'
    >
      <Container>
        <Navbar.Brand href='/'>Glaucoma Detection</Navbar.Brand>
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
          <Nav >
            <Button>
              <NavLink to='/predict'>Predict</NavLink>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
