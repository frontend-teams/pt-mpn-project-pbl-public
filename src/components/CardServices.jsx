import { useEffect, useState } from "react";
import "../styling/pages/Services.css";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "../index.css";
import { fetchServices } from "../utils/servicesApi";
import API_BASE_URL from "../utils/apiConfig";
import { WA_NUMBER } from "../data/training";

export default function CardServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // ===============================
  // Fetch data layanan
  // ===============================
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

  // ===============================
  // Handler buka modal
  // ===============================
  const handleOpenModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  // ===============================
  // Handler hubungi
  // ===============================
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const handleWhatsApp = () => {
    if (!selectedService) return;
    const message = `Halo, saya ingin mendaftar untuk layanan "${selectedService.nama_BUsaha}".`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
              Jelajahi berbagai layanan yang kami tawarkan
            </p>
          </div>
        </Container>
      </section>

      {/* Section Layanan */}
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
                      {item.deskripsi.length > 100
                        ? item.deskripsi.substring(0, 100) + "..."
                        : item.deskripsi}
                    </p>

                    <button
                      className="btn btn-link p-0 text-start mt-auto"
                      onClick={() => handleOpenModal(item)}
                    >
                      Lihat selengkapnya...
                    </button>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      {/* ===============================
          MODAL DETAIL LAYANAN
      =============================== */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.nama_BUsaha}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedService && (
            <>
              <img
                src={
                  selectedService.poto
                    ? `${API_BASE_URL}/${selectedService.poto}`
                    : "/default-service.jpg"
                }
                alt={selectedService.nama_BUsaha}
                className="img-fluid rounded mb-3"
              />

              <p className="text-muted">{selectedService.deskripsi}</p>
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Tutup
          </Button>
          <Button
            variant="primary"
            onClick={handleWhatsApp}
            disabled={!selectedService?.nama_BUsaha}
          >
            Daftar via WhatsApp
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
