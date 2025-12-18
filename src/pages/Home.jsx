import { Container, Row, Col, Button } from "react-bootstrap";
import { companyInfo } from "../data/company";
import { Link } from "react-router-dom";
import "../styling/pages/Home.css";
import CTASection from "../components/CTASection";
import "../styling/components/CTASection.css";
// import Testimonials from "./Testimonials";
// import "../styling/pages/Testimonials.css";

import Courses from "./Courses";
import Services from "./Services";
import usePageMeta from "../utils/usePageMeta";

/* carousel */
import Clients from "./Clients";
import Gallery from "./Gallery";

// Import gambar hero
import heroImage from "../assets/gallery/image4.jpeg";

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
                </div>
              </Col>
              <Col lg={6} className="d-none d-lg-block fade-in">
                <img
                  src={heroImage}
                  alt="Tim Profesional PT MPN - Pelatihan dan Pengembangan SDM Berkualitas"
                  className="img-fluid rounded shadow-custom"
                  loading="eager"
                  width="600"
                  height="400"
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
        {/* <Testimonials /> */}
        <Gallery />
        <CTASection />
      </>
    </>
  );
}

export default Home;
