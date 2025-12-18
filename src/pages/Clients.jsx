import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import API_BASE_URL from "../api/apiConfig"; // Import API_BASE_URL

import { fetchPartners } from "../api/partnersApi"; // panggil fungsi fetch API

const Clients = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true); // State loading untuk menunggu data

  useEffect(() => {
    const getPartners = async () => {
      const data = await fetchPartners(); // default ambil semua
      if (data?.data) {
        setPartners(data.data);
        setLoading(false); // Set loading false setelah data diterima
      }
    };
    getPartners();
  }, []);

  if (loading) {
    return (
      <section className="courses-section py-5 text-center">
        <div className="spinner-border text-primary" />
      </section>
    );
  }

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
            style={{ width: "100%", maxWidth: "550px", height: "80px" }}
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
              {partners.map((partner) => (
                <SwiperSlide
                  key={partner.id}
                  className="d-flex align-items-center justify-content-center"
                >
                  <img
                    src={`${API_BASE_URL}/uploads/${partner.logo}`} // Menggunakan API_BASE_URL untuk URL gambar
                    alt={partner.nama_partner}
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
