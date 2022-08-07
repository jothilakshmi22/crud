import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand style={{ color: "white", marginRight: "50PX" }}>
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link
              to="/user"
              style={{
                color: "white",
                marginRight: "50PX",
              }}
            >
              List of Users
            </Link>
            <Link to="/create-user" style={{ color: "white" }}>
              Create User
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
