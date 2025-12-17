import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import image1 from "../assets/gallery/image1.jpeg";
import image2 from "../assets/gallery/image2.jpeg";
import image3 from "../assets/gallery/image3.jpeg";
import image4 from "../assets/gallery/image4.jpeg";
import image5 from "../assets/gallery/image5.jpeg";
import { fetchGallery } from "../utils/publicApi";
import { resolveUploadUrl } from "../utils/imageUrl";

const fallbackPhotos = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
  { src: image5 },
];

const Gallery = () => {
  const [photos, setPhotos] = useState(fallbackPhotos);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchGallery();
        if (res && res.length) {
          const mapped = res
            .map((item) => ({
              src: resolveUploadUrl(item.image || item.foto || item.poto || item.url),
              title: item.judul || item.title,
            }))
            .filter((p) => p.src);
          if (mapped.length) setPhotos(mapped);
        }
      } catch (error) {
        console.warn("Gagal memuat galeri, gunakan fallback", error);
      }
    };
    load();
  }, []);

  return (
    <section className="py-5 overflow-hidden">
      <h1 className="display-4 fw-bold text-gradient pb-1 mb-2 text-center">Galeri Kami</h1>
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
          {photos.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "481px" }}>
              <div
                style={{
                  width: "481px",
                  height: "326px",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={item.src}
                  alt={item.title || "Gallery"}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
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
