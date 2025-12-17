import React from "react";
import icon1 from "../assets/icons/services_logo.png";
import { useBidangUsaha } from "../hooks/useBidangUsaha";
import { resolveUploadUrl } from "../utils/imageUrl";

const fallbackServices = [
  { icon: icon1, title: "Pelatihan & Pendidikan Nonformal" },
  { icon: icon1, title: "Pengembangan SDM & Konsultansi Manajemen" },
  { icon: icon1, title: "Pelatihan Keterampilan Kerja" },
  { icon: icon1, title: "Jasa Sertifikasi" },
  { icon: icon1, title: "Penyediaan SDM (Manpower Supply)" },
];

const Services = () => {
  const { data: layanan } = useBidangUsaha();
  const list = (layanan.length ? layanan : fallbackServices).slice(0, 8);
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(180deg, #03045E 0%, #001233 100%)",
        color: "white",
      }}
    >
      <div className="container text-center">
        <h2 className="display-4 fw-bold text-gradient pb-1 mb-2 text-center">
          Pelayanan Kami
        </h2>
        <p className="text-light mb-5" style={{ opacity: 0.8 }}>
          Pelatihan & Pengembangan SDM untuk Perusahaan
        </p>
        <div className="row justify-content-center g-3 g-md-4">
          {list.map((service, i) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={i}>
              <div
                className="p-4 rounded-4 d-flex flex-column align-items-center justify-content-center gap-3"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  minHeight: "220px",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(5px)",
                  transition: "all 0.3s ease",
                  margin: "0 auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={resolveUploadUrl(service.poto) || service.icon || icon1}
                  width="100"
                  height="100"
                  alt="icon"
                  loading="lazy"
                />
                <p className="fw-semibold text-white text-center mb-0">
                  {service.nama_BUsaha || service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
