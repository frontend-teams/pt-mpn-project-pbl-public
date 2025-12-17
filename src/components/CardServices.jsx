import React from "react";
import "../styling/pages/Services.css";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import { defaultLayananInfo } from "../data/layanan";
import { useBidangUsaha } from "../hooks/useBidangUsaha";
import { resolveUploadUrl } from "../utils/imageUrl";

export default function CardServices() {
  const navigate = useNavigate();
  const { data: layanan, loading } = useBidangUsaha();
  const list = layanan.length ? layanan : defaultLayananInfo;

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
            {loading ? (
              <div className="text-center py-4">Memuat layanan...</div>
            ) : list.length === 0 ? (
              <div className="text-center py-4 text-muted">Belum ada layanan.</div>
            ) : (
              (Array.isArray(list) ? list : []).map((item, index) => (
                <Col key={item.id_BUsaha || item.id || index} md={6} lg={4} className="fade-in">
                  <div className="Layanan-card shadow-custom h-100 p-3 d-flex flex-column">
                    <img
                      src={resolveUploadUrl(item.poto) || item.image || item.photo || ""}
                      alt={item.name || item.nama_BUsaha || "Layanan"}
                      className="img-fluid rounded mb-3"
                    />
                    <h3 className="h5 fw-bold">{item.name || item.nama_BUsaha}</h3>
                    <p className="text-muted grow">{item.description || item.deskripsi}</p>

                    <button
                      className="btn btn-link p-0 text-start"
                      onClick={() =>
                        navigate(`/services/${item.id_BUsaha || item.id || index}`, { state: { openCategory: item.id_BUsaha || item.id } })
                      }
                    >
                      Lihat selengkapnya...
                    </button>
                  </div>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
}
