// import React from "react";
// import icon1 from "../assets/icons/services_logo.png";
// const services = [
//   { icon: icon1, title: "Pelatihan & Pendidikan Nonformal" },
//   { icon: icon1, title: "Pengembangan SDM & Konsultansi Manajemen" },
//   { icon: icon1, title: "Pelatihan Keterampilan Kerja" },
//   { icon: icon1, title: "Jasa Sertifikasi" },
//   { icon: icon1, title: "Penyediaan SDM (Manpower Supply)" },
// ];
// const Services = () => {
//   return (
//     <section
//       className="py-5"
//       style={{
//         background: "linear-gradient(180deg, #03045E 0%, #001233 100%)",
//         color: "white",
//       }}
//     >
//       <div className="container text-center">
//         <h2 className="display-4 fw-bold text-gradient pb-1 mb-2 text-center">
//           Pelayanan Kami
//         </h2>
//         <p className="text-light mb-5" style={{ opacity: 0.8 }}>
//           Pelatihan & Pengembangan SDM untuk Perusahaan
//         </p>
//         <div className="row justify-content-center g-3 g-md-4">
//           {services.map((service, i) => (
//             <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={i}>
//               <div
//                 className="p-4 rounded-4 d-flex flex-column align-items-center justify-content-center gap-3"
//                 style={{
//                   width: "100%",
//                   maxWidth: "200px",
//                   minHeight: "220px",
//                   background: "rgba(255,255,255,0.1)",
//                   backdropFilter: "blur(5px)",
//                   transition: "all 0.3s ease",
//                   margin: "0 auto",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-5px)";
//                   e.currentTarget.style.boxShadow =
//                     "0 8px 20px rgba(0,0,0,0.3)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "none";
//                 }}
//               >
//                 <img
//                   src={service.icon}
//                   width="100"
//                   height="100"
//                   alt="icon"
//                   loading="lazy"
//                 />
//                 <p className="fw-semibold text-white text-center mb-0">
//                   {service.title}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Services;

import { useEffect, useState } from "react";
import "../styling/pages/Services.css";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import { fetchServices } from "../utils/servicesApi";
import API_BASE_URL from "../utils/apiConfig";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===============================
  // Fetch data layanan dengan limit 3
  // ===============================
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchServices();
        // Hanya mengambil 3 layanan pertama
        setServices(Array.isArray(data) ? data.slice(0, 3) : []);
      } catch (err) {
        console.error("Gagal load layanan:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <>
      {/* Section Layanan */}
      <section className="section-padding bg-light">
        <Container>
          <div className="text-center fade-in">
            <h1 className="display-4 fw-bold text-gradient pb-1 mb-2">
              Layanan Kami
            </h1>
            <p className="fs-5 text-muted">
              Jelajahi beberapa layanan yang kami tawarkan
            </p>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" />
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">Tidak ada layanan yang tersedia saat ini.</p>
            </div>
          ) : (
            <Row className="g-4 justify-content-center">
              {services.map((item) => (
                <Col key={item.id_BUsaha} md={6} lg={4} className="fade-in">
                  <div className="Layanan-card shadow-custom h-100 p-3 d-flex flex-column">
                    <img
                      src={
                        item.poto
                          ? `${API_BASE_URL}/${item.poto}`
                          : "/default-service.jpg"
                      }
                      alt={item.nama_BUsaha || "Layanan Image"}
                      className="img-fluid rounded mb-3"
                    />

                    <h3 className="h5 fw-bold">{item.nama_BUsaha}</h3>

                    <p className="text-muted grow">
                      {item.deskripsi.length > 100
                        ? item.deskripsi.substring(0, 100) + "..."
                        : item.deskripsi}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
    </>
  );
}
