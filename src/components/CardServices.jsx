import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styling/pages/Services.css";
import "../index.css";
import { fetchServices } from "../api/servicesApi";
import API_BASE_URL from "../api/apiConfig";

export default function CardServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchServices();
        setServices(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Gagal load layanan:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <Container>
          <div className="text-center fade-in">
            <h1 className="display-4 fw-bold text-gradient mb-2">
              Layanan Kami
            </h1>
            <p className="fs-5 text-muted">
              Jelajahi berbagai layanan yang kami tawarkan
            </p>
          </div>
        </Container>
      </section>

      {/* LIST */}
      <section className="section-padding bg-light">
        <Container>
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" />
            </div>
          ) : (
            <Row className="g-4 justify-content-center">
              {services.map((item) => (
                <Col key={item.id_BUsaha} md={6} lg={4} className="fade-in">
                  <div className="Layanan-card shadow-custom h-100 p-3 d-flex flex-column">
                    <img
                      src={
                        item.poto
                          ? `${API_BASE_URL}/${item.poto}`
                          : "/default-service.jpg"
                      }
                      alt={item.nama_BUsaha}
                      className="img-fluid rounded mb-3"
                    />

                    <h3 className="h5 fw-bold">{item.nama_BUsaha}</h3>

                    <p className="text-muted grow">
                      {item.deskripsi?.length > 100
                        ? item.deskripsi.slice(0, 100) + "..."
                        : item.deskripsi}
                    </p>

                    <Button
                      as={Link}
                      to={`/services/${item.id_BUsaha}`}
                      className="btn-primary-custom mt-auto"
                    >
                      Lihat Detail
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
    </>
  );
}
