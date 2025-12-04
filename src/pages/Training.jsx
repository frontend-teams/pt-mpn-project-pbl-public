import React, { useState, useEffect } from "react";
import trainings from "../data/training";
import TrainingCard from "../components/TrainingCard";
import TrainingDetail from "./TrainingDetail";
import "../styling/pages/Training.css";

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
      className={`container py-5 ${
        mounted
          ? "training-slide-up-enter training-fade-enter"
          : "training-slide-up-init training-fade-init"
      }`}
    >
      <header className="title-section">
        <h1 className="display-4 fw-bold text-gradient pb-2 mt-4 text-center">
          Program Pelatihan
        </h1>
        <p className="text-center mb-5 fw-light fs-5 text-muted">
          Tingkatkan skill kamu melalui berbagai pelatihan terbaik kami.
        </p>
      </header>

      <div className="mb-4">
        <h2 className="fw-bold fs-3">Pelatihan dan Pendidikan Non Formal</h2>
      </div>

      <div className="row g-4 training-row">
        {trainings
          .filter((t) => t.category === "non-formal")
          .map((item) => (
            <TrainingCard key={item.id} item={item} onOpen={openModal} />
          ))}
      </div>

      <div className="mt-5 mb-4 pt-5">
        <h2 className="fw-bold fs-3">Pelatihan Keterampilan Kerja</h2>
      </div>

      <div className="row g-4 training-row">
        {trainings
          .filter((t) => t.category === "keterampilan-kerja")
          .map((item) => (
            <TrainingCard key={item.id} item={item} onOpen={openModal} />
          ))}
      </div>

      <TrainingDetail
        show={show}
        onClose={closeModal}
        data={selectedTraining}
      />
    </div>
  );
};

export default Training;
