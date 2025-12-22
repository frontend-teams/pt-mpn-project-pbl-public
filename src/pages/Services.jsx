import { useEffect, useState } from "react";
import "../styling/pages/Services.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";
import { fetchServices } from "../api/servicesApi";
import API_BASE_URL from "../api/apiConfig";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===============================
  // Fetch data layanan dengan limit 3
  // ===============================
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchServices();
        setServices(Array.isArray(data) ? data.slice(0, 3) : []);
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
      {/* Section Layanan */}
      <section className="section-padding bg-light">
        <Container>
          <div className="text-center fade-in">
            <h1 className="display-4 fw-bold text-gradient pb-1 mb-2">
              Layanan Kami
            </h1>
            <p className="fs-5 text-muted">
              Jelajahi beberapa layanan yang kami tawarkan
            </p>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" />
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">
                Tidak ada layanan yang tersedia saat ini.
              </p>
            </div>
          ) : (
            <Row className="g-4 justify-content-center">
              {services.map((item) => (
                <Col key={item.id_BUsaha} md={6} lg={4} className="fade-in">
                  <Link
                    to={`/services/${item.id_BUsaha}`} // Link ke halaman detail
                    className="text-decoration-none" // Hapus garis bawah dari link
                  >
                    <div className="Layanan-card shadow-custom h-100 p-3 d-flex flex-column">
                      <img
                        src={
                          item.poto
                            ? item.poto.startsWith("http")
                              ? item.poto
                              : `${API_BASE_URL}${
                                  item.poto.startsWith("/") ? "" : "/"
                                }${item.poto}`
                            : "/default-service.jpg"
                        }
                        alt={item.nama_BUsaha || "Layanan Image"}
                        className="img-fluid rounded mb-3"
                      />

                      <h3 className="h5 fw-bold">{item.nama_BUsaha}</h3>

                      <p className="text-muted grow">
                        {item.deskripsi?.length > 100
                          ? item.deskripsi.substring(0, 100) + "..."
                          : item.deskripsi}
                      </p>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          )}

          {/* Tombol "Lihat Lebih Banyak" */}
          <div className="text-center mt-5">
            <Button as={Link} to="/services" variant="outline-primary">
              Lihat Lebih Banyak Layanan
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
