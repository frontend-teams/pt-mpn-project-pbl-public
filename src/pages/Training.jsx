import React, { useState, useEffect } from "react";
import trainings from "../data/training";
import TrainingCard from "../components/TrainingCard";
import TrainingDetail from "./TrainingDetail";
import "../styling/pages/Training.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../index.css";

const Training = () => {
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openModal = (item) => {
    setSelectedTraining(item);
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    setSelectedTraining(null);
  };

  useEffect(() => {
    // Memastikan scroll restoration diatur ke manual
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Memastikan halaman dimulai dari atas
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // Trigger untuk animasi masuk saat komponen dimount
    const t = setTimeout(() => setMounted(true), 100);
    return () => {
      clearTimeout(t);
      if ("scrollRestoration" in window.history) {
        // Mengembalikan perilaku default saat komponen di-unmount
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <div
      className={`${mounted
        ? "training-slide-up-enter training-fade-enter"
        : "training-slide-up-init training-fade-init"
        }`}
    >
      <section className="hero-section">
        <Container>
          <header className="title-section py-4 mb-3 fade-in">
            <h1 className="display-4 fw-bold text-gradient pb-1 mb-2 text-center">
              Program Pelatihan
            </h1>
            <p className="fs-5 text-muted text-center">
              Tingkatkan skill kamu melalui berbagai pelatihan terbaik kami
            </p>
          </header>
        </Container>
      </section>

      <section className="section-padding bg-light">
        <div className="mb-4">
          <h2 className="section-title">Pelatihan dan Pendidikan Non Formal</h2>
        </div>
        <Container>
          <Row className="g-4">
            <Col lg={12} className="fade-in">
              <div className="row g-4 training-row">
                {trainings
                  .filter((t) => t.category === "non-formal")
                  .map((item, idx) => (
                    <TrainingCard
                      key={item.id}
                      item={item}
                      onOpen={openModal}
                      index={idx}
                    />
                  ))}
              </div>
            </Col>
          </Row>
        </Container>

        <div className="mt-5 mb-4 pt-5">
          <h2 className="section-title">Pelatihan Keterampilan Kerja</h2>
        </div>

        <Container>
          <Row className="g-4">
            <Col lg={12} className="fade-in">
              <div className="row g-4 training-row">
                {trainings
                  .filter((t) => t.category === "keterampilan-kerja")
                  .map((item, idx) => (
                    <TrainingCard
                      key={item.id}
                      item={item}
                      onOpen={openModal}
                      index={idx}
                    />
                  ))}
              </div>
            </Col>
          </Row>
        </Container>

        <TrainingDetail
          show={show}
          onClose={closeModal}
          data={selectedTraining}
        />
      </section >
    </div>

  );
};

export default Training;
