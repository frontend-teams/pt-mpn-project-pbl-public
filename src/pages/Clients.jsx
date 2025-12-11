import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import clientA from "../assets/clients/kojic.png";
import clientB from "../assets/clients/kolam_ikan.png";
import clientC from "../assets/clients/tensani.png";

const logos = [
  clientA,
  clientB,
  clientC,
  clientA,
  clientB,
  clientC,
  clientA,
  clientB,
];

const Clients = () => {
  return (
    <section className="py-4">
      <div className="container text-center">
        <h2 className="display-4 fw-bold text-gradient pb-5 mb-2">
          Mitra Kami
        </h2>
        <div className="d-flex justify-content-center">
          <div
            className="fade-edges-wrapper"
            style={{ width: "550px", height: "80px" }}
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              speed={3000}
              allowTouchMove={false}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              className="h-100"
            >
              {logos.map((logo, index) => (
                <SwiperSlide
                  key={index}
                  className="d-flex align-items-center justify-content-center"
                >
                  <img
                    src={logo}
                    alt={`Client ${index}`}
                    style={{ maxHeight: "70px", width: "auto" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
