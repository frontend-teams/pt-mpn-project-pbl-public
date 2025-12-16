import React, { useState, useEffect } from "react";
import TrainingCard from "../components/TrainingCard";
import TrainingDetail from "./TrainingDetail";
import { fetchJenisUsaha } from "../utils/jenisUsahaApi";
import API_BASE_URL from '../utils/apiConfig';
import { Container, Row, Col } from "react-bootstrap";
import "../styling/pages/Training.css";
import "../index.css";
import usePageMeta from "../utils/usePageMeta";

const Training = () => {
  usePageMeta({
    title: "Program Pelatihan PT MPN — Nonformal & Keterampilan Kerja",
    description:
      "Pilih berbagai program pelatihan nonformal dan keterampilan kerja: soft skills, administrasi, digital, operator alat berat, welding, dan lainnya.",
    ogType: "website",
  });
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [groupedPrograms, setGroupedPrograms] = useState({});

  const getData = async () => {
    setLoading(true);
    const data = await fetchJenisUsaha();
    setPrograms(data);
    groupProgramsByField(data);
    setLoading(false);
  };

  const groupProgramsByField = (data) => {
    const grouped = data.reduce((acc, item) => {
      const field = item.bidang_usaha.nama_BUsaha;
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(item);
      return acc;
    }, {});
    setGroupedPrograms(grouped);
  };

  useEffect(() => {
    getData();
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, behavior: "auto" });

    const t = setTimeout(() => setMounted(true), 100);
    return () => {
      clearTimeout(t);
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  const openModal = (item) => {
    setSelectedTraining(item);
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    setSelectedTraining(null);
  };

  return (
    <div
      className={`${
        mounted
          ? "training-slide-up-enter training-fade-enter"
          : "training-slide-up-init training-fade-init"
      }`}
    >
      <section className="hero-section">
        <Container>
          <header className="title-section py-4 mb-3 fade-in text-center">
            <h1 className="display-4 fw-bold text-gradient pb-1 mb-2">
              Program Pelatihan
            </h1>
            <p className="fs-5 text-muted">
              Tingkatkan skill kamu melalui berbagai pelatihan terbaik kami
            </p>
          </header>
        </Container>
      </section>

      <section className="section-padding bg-light">
        {/* <div className="mb-4">
          <h2 className="section-title">Daftar Program Pelatihan</h2>
        </div> */}

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" />
          </div>
        ) : (
          <Container>
            {Object.keys(groupedPrograms).map((field, index) => (
              <div key={index} className="d-grid gap-4 mb-5">
                <h3 className="section-title">{field}</h3>
                <Row className="g-4 training-row">
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

        <TrainingDetail show={show} onClose={closeModal} data={selectedTraining} />
      </section>
    </div>
  );
};

export default Training;
