import React from "react";
import "../styling/pages/Services.css";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import { layananInfo } from "../data/layanan";

export default function CardServices() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <div className="text-center fade-in">
            <h1 className="display-4 fw-bold text-gradient pb-1 mb-2">
              Layanan Kami
            </h1>

            <p className="fs-5 text-muted">
              Jelajahi berbagai Layanan yang kami tawarkan
            </p>
          </div>
        </Container>
      </section>

      {/* Section Layanan */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="g-4 justify-content-center">
            {layananInfo.map((item) => (
              <Col key={item.id} md={6} lg={4} className="fade-in">
                <div className="Layanan-card shadow-custom h-100 p-3 d-flex flex-column">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded mb-3"
                  />
                  <h3 className="h5 fw-bold">{item.name}</h3>
                  <p className="text-muted flex-grow-1">{item.description}</p>

                  <button
                    className="btn btn-link p-0 text-start"
                    onClick={() =>
                      navigate(item.path, { state: { openCategory: item.id } })
                    }
                  >
                    Lihat selengkapnya...
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
