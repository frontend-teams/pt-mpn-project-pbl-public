import React from "react";
import whatsapp_icon from "../assets/icons/whatsapp_logo.png";
import heroImg from "../assets/misc/woman_smiling.png";

const Hero = () => {
  return (
    <section
      className="hero-section text-white d-flex align-items-center"
      style={{ minHeight: "480px" }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero-title fw-bold text-white">
              Tingkatkan Kualitas SDM Anda Bersama Mitra Pelatihan Terpercaya
            </h1>

            <div className="d-flex gap-3 mt-4">
              <button className="btn-blue px-4 py-2">Pelatihan</button>

              <button className="custom-button d-flex align-items-center gap-2">
                <img
                  src={whatsapp_icon}
                  alt="whatsapp"
                  style={{ width: "18px", height: "18px" }}
                />
                Konsultasi Gratis
              </button>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1 mt-4 mt-md-0 text-center">
            <img
              src={heroImg}
              alt="Trainer"
              className="img-fluid rounded-4 hero-img-shadow"
              style={{ maxHeight: "350px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
