import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import API_BASE_URL from "../api/apiConfig";
import { WA_NUMBER } from "../data/training";
import "../index.css";
import "../styling/components/CTASection.css";

const TrainingDetail = () => {
  const { id } = useParams();
  const [training, setTraining] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/jenis-usaha/${id}`);
        const json = await res.json();
        console.log("📝 Training detail:", json);
        setTraining(json.data);
      } catch (err) {
        console.error("❌ Error fetching training detail:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  const handleWhatsApp = () => {
    const message = `
    Saya tertarik mengikuti pelatihan: *${training.nama_jenis}*

    Mohon informasi jadwal, biaya, dan pendaftarannya.
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
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  if (!training) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="h2 mb-4">Pelatihan tidak ditemukan</h1>
          <Button as={Link} to="/training">
            Kembali ke Pelatihan
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="hero-section">
        <Container>
          <div className="fade-in">
            <Button
              as={Link}
              to="/training"
              variant="link"
              className="mb-4 p-0"
            >
              ← Kembali ke Pelatihan
            </Button>

            <div className="d-flex align-items-center gap-3 mb-4 flex-wrap">
              <Badge bg="secondary" className="badge-custom">
                {training.bidang_usaha?.nama_BUsaha}
              </Badge>
            </div>

            <h1 className="display-4 fw-bold mb-4">{training.nama_jenis}</h1>
          </div>
        </Container>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              {/* Deskripsi */}
              <Card className="mb-4 shadow-sm fade-in">
                <Card.Body className="p-5">
                  <h2 className="h3 fw-bold mb-4">Deskripsi Pelatihan</h2>
                  <p className="text-muted">
                    {training.deskripsi_lengkap || training.deskripsi}
                  </p>
                </Card.Body>
              </Card>

              {/* Info Grid */}
              <Row className="g-4 mb-5">
                <Col md={6}>
                  <Card className="h-100 shadow-sm fade-in">
                    <Card.Body className="p-4">
                      <div className="card-icon icon-primary mb-4">
                        <i className="bi bi-check-circle-fill fs-4"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">Manfaat Pelatihan</h3>
                      <p className="text-muted small">
                        Meningkatkan kompetensi dan keterampilan peserta sesuai
                        kebutuhan industri.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="h-100 shadow-sm fade-in">
                    <Card.Body className="p-4">
                      <div className="card-icon icon-secondary mb-4">
                        <i className="bi bi-people-fill fs-4"></i>
                      </div>
                      <h3 className="h5 fw-bold mb-3">Target Peserta</h3>
                      <p className="text-muted small">
                        Masyarakat umum, pencari kerja, atau tenaga kerja yang
                        ingin meningkatkan skill.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* CTA */}
              <Card className="bg-gradient-primary text-white border-0 shadow-custom fade-in">
                <Card.Body className="p-5 text-center">
                  <h3 className="h4 fw-bold mb-3">
                    Tertarik mengikuti pelatihan ini?
                  </h3>
                  <p className="mb-4">
                    Hubungi kami untuk informasi jadwal dan pendaftaran.
                  </p>
                  <Button
                    size="lg"
                    className="cta-btn-primary"
                    onClick={handleWhatsApp}
                  >
                    Daftar sekarang
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default TrainingDetail;
