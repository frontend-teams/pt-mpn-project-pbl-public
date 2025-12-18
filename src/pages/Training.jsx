import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrainingCard from "../components/TrainingCard";
import TrainingDetail from "./TrainingDetail";
import { fetchJenisUsaha } from "../api/jenisUsahaApi";
import API_BASE_URL from "../api/apiConfig";
import "../styling/pages/Training.css";
import "../index.css";
import usePageMeta from "../utils/usePageMeta";

const Training = ({ limit = null }) => {
  usePageMeta({
    title: "Program Pelatihan PT MPN",
    description: "Berbagai program pelatihan dan keterampilan kerja",
  });

  const [programs, setPrograms] = useState([]);
  const [groupedPrograms, setGroupedPrograms] = useState({});
  const [loading, setLoading] = useState(true);

  // =========================
  // Fetch data
  // =========================
  const getData = useCallback(async () => {
    setLoading(true);
    const data = await fetchJenisUsaha(limit);
    setPrograms(data || []);
    setLoading(false);
  }, [limit]);

  useEffect(() => {
    getData();
  }, [getData]);

  // =========================
  // Group by bidang usaha
  // =========================
  useEffect(() => {
    const grouped = programs.reduce((acc, item) => {
      const key = item.bidang_usaha?.nama_BUsaha || "Lainnya";
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
    setGroupedPrograms(grouped);
  }, [programs]);

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="hero-section">
        <Container>
          <div className="text-center fade-in">
            <h1 className="display-4 fw-bold mb-4">
              Program <span className="text-gradient">Pelatihan</span>
            </h1>
            <p className="fs-5 text-muted">
              Tingkatkan keterampilan melalui program pelatihan terbaik kami
            </p>
          </div>
        </Container>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section-padding bg-light">
        <Container>
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" />
            </div>
          ) : (
            Object.keys(groupedPrograms).map((field) => (
              <div key={field} className="mb-5">
                {/* Section title seperti Services */}
                <h2 className="section-title mb-4">{field}</h2>

                <Row className="g-4">
                  {groupedPrograms[field].map((item) => (
                    <Col key={item.id} md={6} lg={4} className="fade-in">
                      <TrainingCard
                        item={{
                          id: item.id,
                          title: item.nama_jenis,
                          desc: item.deskripsi,
                          image: item.foto
                            ? `${API_BASE_URL}/uploads/${item.foto}`
                            : "/default-training.jpg",
                        }}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            ))
          )}
        </Container>
      </section>
    </div>
  );
};

export default Training;
