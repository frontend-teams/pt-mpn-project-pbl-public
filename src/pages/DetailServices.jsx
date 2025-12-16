import React, { useState, useEffect, useRef } from "react";
import "../styling/pages/Services.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import CTASection from "../components/CTASection";
import { detailLayanan } from "../data/detailLayanan";
import usePageMeta from "../utils/usePageMeta";

export default function DetailServices() {
  usePageMeta({
    title: "Detail Layanan — PT MPN",
    description:
      "Detail layanan PT MPN beserta materi dan manfaat yang didapat.",
    ogType: "website",
  });
  const { state } = useLocation();
  const navigate = useNavigate();
  const headerRefs = useRef({});
  const accordionControl = useRef({});

  // Buat ref DOM untuk setiap data
  useEffect(() => {
    Object.keys(detailLayanan).forEach((id) => {
      if (!headerRefs.current[id]) {
        headerRefs.current[id] = React.createRef();
      }
    });
  }, []);

  // Auto open + scroll
  useEffect(() => {
    const key = state?.openCategory;
    if (key) {
      setTimeout(() => {
        // 🔥 BUKA accordion lewat fungsi open yg dikirim dari component
        accordionControl.current[key]?.open();

        // 🔥 Scroll setelah accordion terbuka
        headerRefs.current[key]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, [state]);

  return (
    <>
      <section className="hero-section">
        <Container>
          <div className="text-center fade-in">
            <h1 className="display-4 fw-bold text-gradient pb-1 mb-2">
              Detail Layanan Kami
            </h1>
            <p className="fs-5 text-muted">
              Jelajahi detail lengkap tentang layanan yang kami tawarkan
            </p>
          </div>
        </Container>
      </section>{" "}
      <div className="detail-container">
        <button
          className="btn btn-link my-4 p-0 fw-bold fs-5"
          onClick={() => navigate("/services")}
        >
          ← Kembali
        </button>
        <div className="services-container">
          {Object.entries(detailLayanan).map(([id, kategori]) => (
            <Accordion
              key={id}
              id={id}
              title={kategori.title}
              items={kategori.items}
              registerController={(ctrl) => {
                accordionControl.current[id] = ctrl;
              }}
              onHeaderRef={(ref) => {
                headerRefs.current[id] = ref;
              }}
            />
          ))}
          <CTASection />
        </div>
      </div>
    </>
  );
}

// ======================================
function Accordion({ id, title, items, registerController, onHeaderRef }) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  // 🔥 fungsi untuk trigger buka dari parent
  useEffect(() => {
    onHeaderRef(headerRef);
    registerController({
      open: () => setOpen(true),
    });
  }, [registerController, id, onHeaderRef]);

  return (
    <div className="accordion">
      <div
        className="accordion-header"
        ref={headerRef}
        onClick={() => setOpen(!open)}
      >
        <h3>{title}</h3>
        <span>{open ? "−" : "+"}</span>
      </div>

      {open && (
        <div className="accordion-content">
          <div className="card-grid">
            {items.map((item, index) => (
              <div key={index} className="service-card">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
