import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';


export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand='md' collapseOnSelect>
        <Container>
        <LinkContainer to={'/'}>
          <Navbar.Brand>ShipIt</Navbar.Brand>
        </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basi-navbar-nav">
            <Nav className="ms-auto">

            <LinkContainer to={'/cart'}>
              <Nav.Link>
                Cart
                <FaShoppingCart />
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/profile"}>
              <Nav.Link>
                Login
                <FaUser />
              </Nav.Link>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
