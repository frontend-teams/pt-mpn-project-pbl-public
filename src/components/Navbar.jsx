import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar as BSNavbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "../components/NavLink";
import logo from "../assets/logo-mpn.svg";
import "../index.css";
import "../styling/components/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Tentang Kami" },
    { to: "/services", label: "Layanan" },
    { to: "/training", label: "Pelatihan" },
    { to: "/team", label: "Tim Kami" },
    { to: "/contact", label: "Kontak" },
  ];

  const handleWhatsApp = () => {
    const WA_NUMBER = "6282114726830";
    const message =
      "Halo, saya ingin mengetahui lebih lanjut tentang layanan Anda.";
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <BSNavbar
      expand="md"
      fixed="top"
      className="navbar-modern"
      expanded={menuOpen}
      onToggle={(expanded) => setMenuOpen(expanded)}
    >
      <Container>
        <BSNavbar.Brand as={Link} to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="MPN Logo" style={{ height: "60px" }} />
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="navbar-nav" />

        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="nav-link"
                activeClassName="active"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <button
              className="btn btn-primary-custom ms-lg-3"
              onClick={() => {
                handleWhatsApp();
                setMenuOpen(false);
              }}
            >
              <div className="d-flex gap-2">
                <i className="bi bi-whatsapp"></i>
                Whatsapp Kami
              </div>
            </button>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
