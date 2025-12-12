import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styling/pages/About.css";
import "../index.css";
import CTASection from "../components/CTASection";
import { companyInfo } from "../data/company";
import heroImage from "../assets/gallery/image6.jpeg";

function About() {
  
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <div className="text-center fade-in">
            <h1 className="display-4 fw-bold text-gradient pb-1 mb-2">
              Tentang Kami
            </h1>
            <p className="fs-5 text-muted">
              Mengenal lebih dekat {companyInfo.name}
            </p>
          </div>
        </Container>
      </section>

      {/* Company Profile */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-start justify-content-center g-4">
            <Col lg={5} className="fade-in">
              <img
                src={heroImage}
                alt="Team Collaboration"
                className="img-fluid rounded shadow-custom"
              />
            </Col>
            <Col lg={6} className="fade-in">
              <h2 className="display-6 fw-bold mb-4">Profil Perusahaan</h2>
              <p className="text-muted mb-4">{companyInfo.about}</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="g-4">
            <Col lg={6} className="fade-in">
              <Card className="card-custom shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="card-icon icon-primary mb-4">
                    <i className="bi bi-bullseye fs-4 text-gradient"></i>
                  </div>
                  <h3 className="h4 fw-bold mb-3">Visi Kami</h3>
                  <p className="text-muted fs-5">{companyInfo.visi}</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6} className="fade-in">
              <Card className="card-custom shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="card-icon icon-secondary mb-4">
                    <i className="bi bi-check-circle-fill fs-3"></i>
                  </div>
                  <h3 className="h4 fw-bold mb-3">Misi Kami</h3>
                  <ul className="list-unstyled mb-0">
                    {companyInfo.misi.map((item, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-center mb-3"
                      >
                        <i className="bi bi-check2-circle text-gradient me-2 fs-4"></i>
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Keunggulan */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-5 fade-in">
            <h2 className="section-title">Keunggulan Kami</h2>
            <p className="section-subtitle">
              Mengapa memilih {companyInfo.name} sebagai partner pengembangan
              SDM Anda
            </p>
          </div>

          <Row className="g-4 justify-content-start">
            {companyInfo.keunggulan.map((item, index) => {
              return (
                <Col md={6} lg={3} key={index} className="fade-in">
                  <Card className={`card-custom shadow-sm h-100 p-4`}>
                    <div className="card-icon icon-primary mb-4">
                      <i className="bi bi-check2-circle fs-3"></i>
                    </div>
                    <p className="text-muted">{item}</p>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Legalitas */}
      <section className="section-padding bg-light">
        <Container>
          <div className="text-center mb-5 fade-in">
            <h2 className="section-title">Legalitas Perusahaan</h2>
            <p className="section-subtitle">
              Beroperasi dengan legal dan terdaftar secara resmi
            </p>
          </div>

          <Row className="justify-content-center fade-in">
            <Col lg={10}>
              <Card className="card-custom shadow-sm">
                <Card.Body className="p-4">
                  <ul className="list-unstyled mb-0">
                    {companyInfo.legalitas.map((item, index) => (
                      <li key={index} className="d-flex align-items-start mb-3">
                        <i className="bi bi-check-circle-fill text-primary me-3 mt-1 shrink-0"></i>
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Location */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={5} className="fade-in">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-pin-map-fill me-2 fs-4"></i>
                <span className="fw-bold fs-5">{companyInfo.name}</span>
              </div>
              <p className="text-muted">{companyInfo.kontak.address}</p>
            </Col>
            <Col lg={5} className="fade-in">
              <div className="ratio ratio-16x9 shadow-custom">
                <iframe
                  src={companyInfo.kontak.mapsEmbed}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

export default About;
