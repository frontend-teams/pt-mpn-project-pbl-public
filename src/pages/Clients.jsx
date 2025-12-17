import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import clientA from "../assets/clients/kojic.png";
import clientB from "../assets/clients/kolam_ikan.png";
import clientC from "../assets/clients/tensani.png";
import { fetchPartners } from "../utils/publicApi";
import { resolveUploadUrl } from "../utils/imageUrl";

const fallbackLogos = [clientA, clientB, clientC, clientA, clientB, clientC, clientA, clientB];

const Clients = () => {
  const [logos, setLogos] = useState(fallbackLogos);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchPartners();
        const mapped = (res || []).map((p) => resolveUploadUrl(p.logo));
        if (mapped.filter(Boolean).length) setLogos(mapped.filter(Boolean));
      } catch (error) {
        console.warn("Gagal memuat partner, gunakan fallback", error);
      }
    };
    load();
  }, []);

  return (
    <section className="py-4">
      <div className="container text-center">
        <h2 className="display-4 fw-bold text-gradient pb-2 my-2">
          Mitra Kami
        </h2>
        <p>
          Berikut adalah beberapa mitra terpercaya yang telah bekerja sama
          dengan kami
        </p>
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
                    loading="lazy"
                    width="140"
                    height="70"
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
