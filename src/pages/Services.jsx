import React from "react";
import icon1 from "../assets/icons/services_logo.png";
const services = [
  { icon: icon1, title: "Pelatihan & Development Karyawan" },
  { icon: icon1, title: "Pengembangan SDM & Manajemen" },
  { icon: icon1, title: "Pelatihan Keterampilan Kerja" },
  { icon: icon1, title: "Perencanaan Event & Pelatihan" },
];
const Services = () => {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(180deg, #03045E 0%, #001233 100%)",
        color: "white",
      }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-2">Our services</h2>
        <p className="text-light mb-5" style={{ opacity: 0.8 }}>
          Pelatihan & Pengembangan SDM untuk Perusahaan
        </p>
        <div className="row justify-content-center g-4">
          {services.map((service, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div
                className="p-4 rounded-4 d-flex flex-column align-items-center justify-content-center gap-3"
                style={{
                  width: "300px",
                  height: "330px",
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
                <img src={service.icon} width="100" alt="icon" />
                <p className="fw-semibold text-white text-center mb-0">
                  {service.title}
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
