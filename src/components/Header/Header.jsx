import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/predict'>Predict</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/contact'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
