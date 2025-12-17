import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styling/pages/Home.css";

import Courses from "./Courses";
import Services from "./Services";
import usePageMeta from "../utils/usePageMeta";
import useCompanyProfile from "../hooks/useCompanyProfile";

/* carousel */
import Clients from "./Clients";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import { useState } from "react";

// Import gambar hero
import heroImage from "../assets/gallery/image4.jpeg";

function Home() {
  usePageMeta({
    title: "PT MPN | Pelatihan & Pengembangan SDM Profesional",
    description:
      "Pelatihan, pengembangan SDM, konsultansi manajemen, sertifikasi, dan penyediaan SDM. Tingkatkan kompetensi tim Anda bersama PT MPN.",
    ogType: "website",
  });

  const { profile } = useCompanyProfile();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    window.location.reload();
  };

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="hero-section home-hero">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="fade-in">
                <div className="d-flex justify-content-end mb-2">
                  <Button
                    variant="outline-light"
                    size="sm"
                    onClick={handleRefresh}
                    disabled={refreshing}
                  >
                    {refreshing ? "Refreshing..." : "Refresh Data"}
                  </Button>
                </div>
                <h1 className="hero-title">
                  <span className="text-gradient">{profile.name}</span>
                </h1>
                <p className="hero-subtitle">{profile.tagline}</p>
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
        <Testimonials />
        <Gallery />
      </>
    </>
  );
}

export default Home;
