import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { companyInfo } from "../data/company";
import logo from "../assets/logo-mpn.svg";
import "../index.css"
import "../styling/components/Footer.css"

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row className="g-4">
          <Col lg={3} md={6}>
             {/* <img src={logo} alt="MPN Logo" style={{ height: "60px" }} /> */}
             <h2>PT. MPN</h2>
            <p className="text-white-50 mb-4">{companyInfo.tagline}</p>
            <div className="d-flex gap-3">
              <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href={companyInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube fs-5"></i>
              </a>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <h4 className="h6 mb-4">Menu</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about">Tentang Kami</Link>
              </li>
              <li className="mb-2">
                <Link to="/services">Layanan</Link>
              </li>
              <li className="mb-2">
                <Link to="/training">Pelatihan</Link>
              </li>
              <li className="mb-2">
                <Link to="/team">Tim Kami</Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h4 className="h6 mb-4">Layanan Kami</h4>
            <ul className="list-unstyled text-white-50 small">
              <li className="mb-2">Pelatihan & Pendidikan</li>
              <li className="mb-2">Konsultansi Manajemen</li>
              <li className="mb-2">Pelatihan Keterampilan</li>
              <li className="mb-2">Event Organizer</li>
              <li className="mb-2">Jasa Sertifikasi</li>
              <li className="mb-2">Penyediaan SDM</li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h4 className="h6 mb-4">Hubungi Kami</h4>
            <ul className="list-unstyled small">
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-geo-alt-fill me-2 mt-1"></i>
                <span className="text-white-50">{companyInfo.contact.address}</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-telephone-fill me-2"></i>
                <a href={`tel:${companyInfo.contact.phone}`}>{companyInfo.contact.phone}</a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-envelope-fill me-2"></i>
                <a href={`mailto:${companyInfo.contact.email}`} className="text-break">
                  {companyInfo.contact.email}
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4 border-light opacity-25" />
        <div className="text-center text-white-50 small">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;