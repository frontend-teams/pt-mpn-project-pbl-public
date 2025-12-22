import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { fetchCompanyProfile } from "../api/companyApi";
import { fetchServices } from "../api/servicesApi"; // Mengimpor fetchServices
import { companyInfo as fallbackCompanyInfo } from "../data/company"; // Import data fallback
// import logo from "../assets/logo-mpn.svg";
import "../index.css";
import "../styling/components/Footer.css";
import { useEffect, useState } from "react";

const Footer = () => {
  const [companyInfo, setCompanyInfo] = useState(fallbackCompanyInfo); // Set default ke fallback
  const [services, setServices] = useState([]); // State untuk menyimpan data layanan
  const [loading, setLoading] = useState(true); // State untuk loading

  // Mengambil data company profile dan layanan
  useEffect(() => {
    const getData = async () => {
      try {
        const companyData = await fetchCompanyProfile();
        const servicesData = await fetchServices(6); // Ambil data layanan dengan limit 6

        // Gunakan API data jika tersedia, merge dengan fallback
        if (companyData) {
          const mergedData = {
            ...fallbackCompanyInfo,
            ...companyData,
            sosial_media: {
              ...fallbackCompanyInfo.sosial_media,
              ...(companyData.sosial_media || {}),
            },
            kontak: {
              ...fallbackCompanyInfo.kontak,
              ...(companyData.kontak || {}),
            },
          };
          setCompanyInfo(mergedData);
        }
        if (servicesData && servicesData.length > 0) {
          setServices(servicesData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading false setelah data diterima atau error
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Menampilkan loading sementara data diambil
  }

  return (
    <footer className="footer-custom">
      <Container>
        <Row className="g-4">
          <Col lg={3} md={6}>
            {/* <img src={logo} alt="MPN Logo" style={{ height: "60px" }} /> */}
            <h2>PT. MPN</h2>
            <p className="text-white-50 mb-4">{companyInfo.tagline}</p>
            <div className="d-flex gap-3">
              {/* <a
                href={companyInfo.sosial_media.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin fs-5"></i>
              </a> */}
              <a
                href={companyInfo.sosial_media.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a
                href={companyInfo.sosial_media.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a
                href={companyInfo.sosial_media.tiktok}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-tiktok fs-5"></i>
              </a>
              <a
                href={companyInfo.sosial_media.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
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
                  <Link to={`/services/${service.id_BUsaha}`}>
                    {service.nama_BUsaha}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h4 className="h6 mb-4">Hubungi Kami</h4>
            <ul className="list-unstyled small">
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-geo-alt-fill me-2 mt-1"></i>
                <span className="text-white-50">
                  {companyInfo.kontak.address}
                </span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-telephone-fill me-2"></i>
                <a href={`tel:${companyInfo.kontak.phone}`}>0821-1472-6830</a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-envelope-fill me-2"></i>
                <a
                  href={`mailto:${companyInfo.kontak.email}`}
                  className="text-break"
                >
                  {companyInfo.kontak.email}
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4 border-light opacity-25" />
        <div className="text-center text-white-50 small">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
