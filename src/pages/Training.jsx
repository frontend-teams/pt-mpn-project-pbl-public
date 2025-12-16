import React, { useState, useEffect, useCallback } from "react";
import TrainingCard from "../components/TrainingCard";
import TrainingDetail from "./TrainingDetail";
import { fetchJenisUsaha } from "../utils/jenisUsahaApi";
import API_BASE_URL from "../utils/apiConfig";
import { Container, Row } from "react-bootstrap";
import "../styling/pages/Training.css";
import "../index.css";
import usePageMeta from "../utils/usePageMeta";

const Training = () => {
  usePageMeta({
    title: "Program Pelatihan PT MPN — Nonformal & Keterampilan Kerja",
    description:
      "Pilih berbagai program pelatihan nonformal dan keterampilan kerja",
    ogType: "website",
  });

  const [programs, setPrograms] = useState([]);
  const [groupedPrograms, setGroupedPrograms] = useState({});
  const [loading, setLoading] = useState(true);

  const [selectedTraining, setSelectedTraining] = useState(null);
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  /**
   * ======================================
   * Fetch data (sekali saat mount)
   * ======================================
   */
  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchJenisUsaha({ noCache: true });
      setPrograms(data || []);
    } catch (error) {
      console.error("Gagal fetch program:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * ======================================
   * Initial load
   * ======================================
   */
  useEffect(() => {
    getData();

    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, [getData]);

  /**
   * ======================================
   * Grouping data (sinkron dengan programs)
   * ======================================
   */
  useEffect(() => {
    const grouped = programs.reduce((acc, item) => {
      const field = item.bidang_usaha?.nama_BUsaha || "Lainnya";
      if (!acc[field]) acc[field] = [];
      acc[field].push(item);
      return acc;
    }, {});
    setGroupedPrograms(grouped);
  }, [programs]);

  const openModal = (item) => {
    setSelectedTraining({ ...item }); // clone object (aman)
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    setSelectedTraining(null);
  };

  return (
    <div
      className={
        mounted
          ? "training-slide-up-enter training-fade-enter"
          : "training-slide-up-init training-fade-init"
      }
    >
      <section className="hero-section">
        <Container>
          <header className="title-section py-4 text-center">
            <h1 className="display-4 fw-bold text-gradient">
              Program Pelatihan
            </h1>
            <p className="fs-5 text-muted">
              Tingkatkan skill kamu melalui berbagai pelatihan terbaik kami
            </p>
          </header>
        </Container>
      </section>

      <section className="section-padding bg-light">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" />
          </div>
        ) : (
          <Container>
            {Object.keys(groupedPrograms).map((field) => (
              <div key={field} className="mb-5">
                <h3 className="section-title">{field}</h3>
                <Row className="g-4">
                  {groupedPrograms[field].map((item, idx) => (
                    <TrainingCard
                      key={item.id}
                      item={{
                        id: item.id,
                        title: item.nama_jenis,
                        desc: item.deskripsi,
                        image: item.foto
                          ? `${API_BASE_URL}/uploads/${item.foto}`
                          : "/default-training.jpg",
                        category: item.bidang_usaha,
                      }}
                      onOpen={() => openModal(item)}
                      index={idx}
                    />
                  ))}
                </Row>
              </div>
            ))}
          </Container>
        )}

        <TrainingDetail
          show={show}
          onClose={closeModal}
          data={selectedTraining}
        />
      </section>
    </div>
  );
};

export default Training;