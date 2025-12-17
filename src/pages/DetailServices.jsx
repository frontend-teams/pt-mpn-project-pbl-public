import React, { useEffect, useRef, useState } from "react";
import "../styling/pages/Services.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import CTASection from "../components/CTASection";
import usePageMeta from "../utils/usePageMeta";
import { fetchBidangUsaha, fetchDetailJenisBidangUsaha, fetchJenisUsaha } from "../utils/publicApi";
import { defaultDetailLayanan } from "../data/detailLayanan";

function DetailServices() {
  usePageMeta({
    title: "Detail Layanan — PT MPN",
    description: "Detail layanan PT MPN beserta materi dan manfaat yang didapat.",
    ogType: "website",
  });

  const { state } = useLocation();
  const navigate = useNavigate();
  const headerRefs = useRef({});
  const accordionControl = useRef({});
  const [groups, setGroups] = useState(defaultDetailLayanan);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [detailRes, bidangRes, jenisRes] = await Promise.all([
          fetchDetailJenisBidangUsaha(),
          fetchBidangUsaha(),
          fetchJenisUsaha(),
        ]);

        const detailList = Array.isArray(detailRes) ? detailRes : [];
        let grouped = buildGroups(detailList, bidangRes, jenisRes);

        // Jika detail kosong, gunakan jenis usaha sebagai fallback detail
        if (!Object.keys(grouped).length && Array.isArray(jenisRes) && jenisRes.length) {
          const pseudoDetails = jenisRes.map((j) => ({
            id: j.id,
            nama_detail: j.nama_jenis,
            deskripsi: j.deskripsi,
            bidangUsahaId: j.bidangUsahaId,
            jenisUsahaId: j.id,
          }));
          grouped = buildGroups(pseudoDetails, bidangRes, jenisRes);
        }

        setGroups(Object.keys(grouped).length ? grouped : defaultDetailLayanan);
      } catch (error) {
        console.error("Gagal memuat detail layanan:", error);
        setGroups(defaultDetailLayanan);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    Object.keys(groups || {}).forEach((id) => {
      if (!headerRefs.current[id]) {
        headerRefs.current[id] = React.createRef();
      }
    });
  }, [groups]);

  // Auto open + scroll
  useEffect(() => {
    const key = state?.openCategory;
    if (key) {
      setTimeout(() => {
        accordionControl.current[key]?.open();
        headerRefs.current[key]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, [state, groups]);

  const groupEntries = Object.entries(groups || {});

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
      </section>
      <div className="detail-container">
        <button
          className="btn btn-link my-4 p-0 fw-bold fs-5"
          onClick={() => navigate("/services")}
        >
          ← Kembali
        </button>
        <div className="services-container">
          {loading ? (
            <div className="text-center py-4">Memuat detail layanan...</div>
          ) : (
            groupEntries.map(([id, kategori]) => (
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
            ))
          )}
          <CTASection />
        </div>
      </div>
    </>
  );
}

function buildGroups(details, bidangList = [], jenisList = []) {
  const groups = {};
  if (!Array.isArray(details)) return groups;

  const bidangMap = {};
  (bidangList || []).forEach((b) => {
    const id = b.id_BUsaha || b.id;
    if (id) bidangMap[id] = b;
  });

  const jenisMap = {};
  (jenisList || []).forEach((j) => {
    if (j.id) jenisMap[j.id] = j;
  });

  details.forEach((item) => {
    const bidangId = item.bidangUsahaId || item.id_BUsaha || item.bidang_usaha_id || item.bidang_usaha?.id_BUsaha;
    const jenisId = item.jenisUsahaId || item.id_jenis_usaha || item.jenis_usaha_id || item.jenis_usaha?.id;
    const groupKey = bidangId || jenisId || item.id || item.id_detail;
    const groupTitle =
      bidangMap[bidangId]?.nama_BUsaha ||
      item.judul ||
      item.title ||
      jenisMap[jenisId]?.nama_jenis ||
      "Layanan";

    if (!groups[groupKey]) {
      groups[groupKey] = { id: groupKey, title: groupTitle, items: [] };
    }

    groups[groupKey].items.push({
      id: item.id || item.id_detail || item.id_detail_jb || jenisId || groupKey,
      name: item.nama_detail || item.name || item.nama_jenis || item.title || "Detail",
      desc: item.deskripsi || item.description || item.desc || "",
    });
  });

  return groups;
}

function Accordion({ id, title, items, registerController, onHeaderRef }) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  // fungsi untuk trigger buka dari parent
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
            {(items || []).map((item, index) => (
              <div key={item.id || index} className="service-card">
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

export default DetailServices;

