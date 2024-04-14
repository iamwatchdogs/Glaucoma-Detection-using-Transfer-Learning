import { Nav, Navbar, Container } from "react-bootstrap";
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
            <Nav.Link href='/predict'>
              <NavLink to='/predict' className={""}>Predict</NavLink>
            </Nav.Link>
            <Nav.Link href='/about'>
              <NavLink to='/about'>About</NavLink>
            </Nav.Link>
            <Nav.Link href='/contact'>
              <NavLink to='/contact'>Contact Us</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
