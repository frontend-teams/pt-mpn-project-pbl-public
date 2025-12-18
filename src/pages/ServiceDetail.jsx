import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import API_BASE_URL from "../utils/apiConfig";
import { WA_NUMBER } from "../data/training";
import "../styling/components/CTASection.css";

export default function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/bidang-usaha/${id}`);
        const json = await res.json();
        console.log("Detail service:", json); // debug API
        setService(json.data ?? json); // langsung pakai object
      } catch (err) {
        console.error("Gagal fetch detail layanan:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  const handleWhatsApp = () => {
    if (!service) return;

    const message = `
Saya tertarik dengan layanan:
*${service.nama_BUsaha}*

Mohon informasi lebih lanjut.
Terima kasih.
    `.trim();

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" />
        <p className="mt-3">Memuat detail layanan...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="text-center py-5">
        <p>Detail layanan tidak ditemukan.</p>
        <Button as={Link} to="/services" variant="primary">
          Kembali ke Layanan
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <Container>
          <Button as={Link} to="/services" variant="link" className="p-0 mb-3">
            ← Kembali ke Layanan
          </Button>

          <h1 className="display-4 fw-bold">{service.nama_BUsaha}</h1>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="shadow-sm mb-5">
                <Card.Body className="p-5">
                  <img
                    src={
                      service.poto
                        ? `${API_BASE_URL}/${service.poto}`
                        : "/default-service.jpg"
                    }
                    alt={service.nama_BUsaha}
                    className="img-fluid rounded mb-4"
                  />

                  <h2 className="h4 fw-bold mb-3">Deskripsi Layanan</h2>
                  <p className="text-muted">
                    {service.deskripsi_lengkap || service.deskripsi}
                  </p>
                </Card.Body>
              </Card>

              {/* CTA */}
              <Card className="cta-card text-white shadow-custom">
                <Card.Body className="p-5 text-center">
                  <h3 className="fw-bold mb-3">Tertarik dengan layanan ini?</h3>
                  <p className="mb-4">
                    Konsultasikan kebutuhan Anda bersama kami
                  </p>
                  <Button className="cta-btn-primary" onClick={handleWhatsApp}>
                    <i className="bi bi-whatsapp"></i>
                    Hubungi via WhatsApp
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
