import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import image1 from "../assets/gallery/image1.jpg";
import image2 from "../assets/gallery/image2.jpg";
import image3 from "../assets/gallery/image3.jpg";
import image4 from "../assets/gallery/image4.jpg";
import image5 from "../assets/gallery/image5.jpg";

const photos = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image1,
  image2,
  image3,
  image4,
  image5,
];

const Gallery = () => {
  return (
    <section className="py-5 overflow-hidden">
      <h1 className="text-center fw-bold">Gallery from Our Courses</h1>
      <p className="text-center text-muted mb-5">
        Strategists, designers, and innovators.
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
          {photos.map((src, index) => (
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
                  src={src}
                  alt="Gallery"
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
