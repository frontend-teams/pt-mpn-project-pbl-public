import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { companyInfo } from "../data/company";
import { Link } from "react-router-dom";
import "../styling/pages/Home.css";

import Courses from "./Courses";
import Services from "./Services";
import usePageMeta from "../utils/usePageMeta";

/* carousel */
import Clients from "./Clients";
import Gallery from "./Gallery";

function Home() {
  usePageMeta({
    title: "PT MPN | Pelatihan & Pengembangan SDM Profesional",
    description:
      "Pelatihan, pengembangan SDM, konsultansi manajemen, sertifikasi, dan penyediaan SDM. Tingkatkan kompetensi tim Anda bersama PT MPN.",
    ogType: "website",
  });
  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="hero-section home-hero">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="fade-in">
                <h1 className="hero-title">
                  <span className="text-gradient">{companyInfo.name}</span>
                </h1>
                <p className="hero-subtitle">{companyInfo.tagline}</p>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Button
                    as={Link}
                    to="/training"
                    size="lg"
                    className="btn-primary-custom"
                  >
                    Lihat Pelatihan <i className="bi bi-arrow-right ms-2"></i>
                  </Button>
                  <Button
                    as={Link}
                    to="/contact"
                    size="lg"
                    className="custom-button"
                  >
                    <div className="d-flex gap-2 justify-content-center">
                      <i className="bi bi-whatsapp"></i>Hubungi Admin Kami
                    </div>
                  </Button>
                </div>
              </Col>
              <Col lg={6} className="d-none d-lg-block fade-in">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                  alt="Team Training"
                  className="img-fluid rounded shadow-custom"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <>
        <Clients />
        <Courses />
        <Services />
        <Gallery />
      </>
    </>
  );
}

export default Home;
