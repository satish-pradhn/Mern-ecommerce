import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = function () {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
          <Container>
            {" "}
            {/* Ensure the elements inside the navbar doesn't stretch to the end*/}
            <Navbar.Brand href="/">My Shop</Navbar.Brand>{" "}
            {/* sub component of navbar*/}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/cart">
                  <FaShoppingCart /> Cart
                </Nav.Link>
                <Nav.Link href="/login">
                  <FaUser /> Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
export default Header;
