import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "@/components/navbar/property/property-navbar.module.css";
import { Button } from "react-bootstrap";
import HamBurgerIcon from "../HamBurgerIcon";
import { useRouter } from "next/router";

const PropertyNavbar = () => {
  const router = useRouter();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={`${styles.navBgColor} py-4`}
    >
      <Container>
        <Navbar.Brand
          href="/"
          role="general-navbar-brand-role"
          className={`${styles.ft18} ${styles.ftBold}`}
        >
          <span className="text-white">property</span>
          <span className="text-warning">.finder</span>
        </Navbar.Brand>

        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          role="navbar-toggle-role"
          className="border-none"
        >
          <HamBurgerIcon />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/property-type/properties"
              className={`text-white ${styles.ft14}`}
            >
              Properties
            </Nav.Link>
            <Nav.Link href="/agents" className={`text-white ${styles.ft14}`}>
              Agents
            </Nav.Link>
            <Nav.Link href="#" className={`text-white ${styles.ft14}`}>
              Accounts
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="/auth/signin"
              className={`text-white ${styles.ft14}`}
            >
              Sign In
            </Nav.Link>
            <Nav.Link
              href="/auth/signup"
              className={`text-white ${styles.ft14} mr-2`}
            >
              Sign Up
            </Nav.Link>

            <Button
              variant="warning"
              role="general-nav-logout-btn"
              className={`text-dark ${styles.ftBold} ${styles.ft14} rounded-0`}
              onClick={() => router.push("/admin/properties/create")}
              style={{ marginLeft: "15px" }}
            >
              Add Property
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PropertyNavbar;
