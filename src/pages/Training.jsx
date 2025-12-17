import React, { useState, useEffect, useMemo } from "react";
import trainings from "../data/training";
import TrainingCard from "../components/TrainingCard";
import TrainingDetail from "./TrainingDetail";
import "../styling/pages/Training.css";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import usePageMeta from "../utils/usePageMeta";
import { fetchJenisUsaha, fetchBidangUsaha } from "../utils/publicApi";
import { resolveUploadUrl } from "../utils/imageUrl";

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
  const [data, setData] = useState(trainings);
  const [bidangMap, setBidangMap] = useState({});

  const openModal = (item) => {
    setSelectedTraining(item);
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    setSelectedTraining(null);
  };

  useEffect(() => {
    const load = async () => {
      try {
        const [jenisRes, bidangRes] = await Promise.all([
          fetchJenisUsaha(),
          fetchBidangUsaha(),
        ]);

        const bidangDict = {};
        (bidangRes || []).forEach((b) => {
          const id = b.id_BUsaha || b.id;
          if (id) bidangDict[id] = b.nama_BUsaha;
        });
        setBidangMap(bidangDict);

        if (jenisRes && jenisRes.length) {
          const mapped = jenisRes.map((item) => ({
            id: item.id,
            title: item.nama_jenis,
            desc: item.deskripsi,
            image: resolveUploadUrl(item.foto),
            bidangUsahaId: item.bidangUsahaId,
          }));
          setData(mapped);
        }
      } catch (error) {
        console.warn("Gagal memuat jenis usaha, gunakan data fallback", error);
      }
    };
    load();
  }, []);

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

  const grouped = useMemo(() => {
    const groups = {};
    (data || []).forEach((item) => {
      const key = item.bidangUsahaId || "lainnya";
      const title = bidangMap[key] || "Program Lainnya";
      if (!groups[key]) groups[key] = { title, items: [] };
      groups[key].items.push(item);
    });
    return Object.entries(groups);
  }, [data, bidangMap]);

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
        {grouped.map(([key, group], groupIdx) => (
          <Container key={key}>
            <div className="mb-4 mt-4">
              <h2 className="section-title">{group.title}</h2>
            </div>
            <Row className="g-4">
              <Col lg={12} className="fade-in">
                <div className="row g-4 training-row">
                  {group.items.map((item, idx) => (
                    <TrainingCard
                      key={item.id || idx}
                      item={item}
                      onOpen={openModal}
                      index={groupIdx * 10 + idx}
                    />
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        ))}

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
