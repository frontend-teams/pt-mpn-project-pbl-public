import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { fetchGallery } from "../utils/galleryApi"; // panggil fungsi fetch API
import API_BASE_URL from "../utils/apiConfig"; // Import API_BASE_URL

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true); // State loading untuk menunggu data

 useEffect(() => {
  const getGallery = async () => {
    const data = await fetchGallery(); // default ambil semua
    console.log('Data dari fetchGallery:', data); // Log data yang diterima dari API
    if (data) {
      setGallery(data);
      setLoading(false); // Set loading false setelah data diterima
    }
  };
  getGallery();
}, []);

  if (loading) {
    return (
      <section className="courses-section py-5 text-center">
        <div className="spinner-border text-primary" />
      </section>
    );
  }

  return (
    <section className="py-5 overflow-hidden">
      <h1 className="display-4 fw-bold text-gradient pb-1 mb-2 text-center">
        Galeri Kami
      </h1>
      <p className="text-center text-muted mb-5">
        Jelajahi momen-momen berharga dari berbagai pelatihan dan kegiatan kami
      </p>

      <div className="fade-edges-wrapper w-100" style={{ height: "441px" }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          speed={5000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="h-100 d-flex align-items-center"
        >
          {gallery.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "481px" }}>
              <div
                style={{
                  width: "481px",
                  height: "326px",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={`${API_BASE_URL}/${item.image}`}
                  alt={"Gallery image"}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
