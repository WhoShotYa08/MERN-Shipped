import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand='md' collapseOnSelect>
        <Container>
          <Navbar.Brand>ShipIt</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basi-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                Cart
                <FaShoppingCart />
              </Nav.Link>
              <Nav.Link href="/profile">
                Login
                <FaUser />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
