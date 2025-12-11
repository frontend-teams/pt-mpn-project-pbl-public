import React, { useState, useEffect, useRef } from "react";
import "../styling/pages/Services.css";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import CTASection from "../components/CTASection";
import { detailLayanan } from "../data/detailLayanan";

export default function DetailServices() {
    const { state } = useLocation();
    const headerRefs = useRef({}); 
    const accordionControl = useRef({}); 

    // Buat ref DOM untuk setiap data
    Object.keys(detailLayanan).forEach((id) => {
        if (!headerRefs.current[id]) {
            headerRefs.current[id] = React.createRef();
        }
    });

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
                    block: "start"
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
                        <hr />
                        <p className="fs-5 text-muted">
                            Jelajahi detail lengkap tentang layanan yang kami tawarkan
                        </p>
                    </div>
                </Container>
            </section>

            <div className="detail-container">
                <div className="services-container">

                    {Object.entries(detailLayanan).map(([id, kategori]) => (
                        <Accordion
                            key={id}
                            id={id}
                            title={kategori.title}
                            items={kategori.items}
                            headerRef={headerRefs.current[id]}
                            registerController={(ctrl) => {
                                accordionControl.current[id] = ctrl;
                            }}
                        />
                    ))}
                    <CTASection />
                </div>
            </div>
        </>
    );
}


/* ======================================
   ACCORDION COMPONENT 
   ====================================== */
function Accordion({ id, title, items, headerRef, registerController }) {
    const [open, setOpen] = useState(false);

    // 🔥 fungsi untuk trigger buka dari parent
    useEffect(() => {
        registerController({
            open: () => setOpen(true),
        });
    }, [registerController]);

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
