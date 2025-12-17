import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import "../styling/components/Footer.css";
import useCompanyProfile from "../hooks/useCompanyProfile";
import { useBidangUsaha } from "../hooks/useBidangUsaha";

const Footer = () => {
  const { profile } = useCompanyProfile();
  const { data: services, loading: loadingServices } = useBidangUsaha();

  if (!profile || loadingServices) {
    return <div>Loading...</div>; // Menampilkan loading sementara data diambil
  }

  return (
    <footer className="footer-custom">
      <Container>
        <Row className="g-4">
          <Col lg={3} md={6}>
            <h2>PT. MPN</h2>
            <p className="text-white-50 mb-4">{profile.tagline}</p>
            <div className="d-flex gap-3">
              <a href={profile.sosial_media.facebook} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href={profile.sosial_media.instagram} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href={profile.sosial_media.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href={profile.sosial_media.youtube} target="_blank" rel="noopener noreferrer">
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
              {services.map((service) => (
                <li key={service.id_BUsaha} className="mb-2">
                  {service.nama_BUsaha} {/* Menampilkan nama layanan */}
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h4 className="h6 mb-4">Hubungi Kami</h4>
            <ul className="list-unstyled small">
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-geo-alt-fill me-2 mt-1"></i>
                <span className="text-white-50">{profile.kontak.address}</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-telephone-fill me-2"></i>
                <a href={`tel:${profile.kontak.phone}`}>{profile.kontak.phone}</a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-envelope-fill me-2"></i>
                <a href={`mailto:${profile.kontak.email}`} className="text-break">
                  {profile.kontak.email}
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4 border-light opacity-25" />
        <div className="text-center text-white-50 small">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
