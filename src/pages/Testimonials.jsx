import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "../components/TestimonialCard";
import { fetchTestimonials } from "../api/testimonialsApi";
import "../styling/pages/Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTestimonials = async () => {
      const data = await fetchTestimonials();

      // Jika data kosong, gunakan dummy data untuk testing
      if (data.length === 0) {
        const dummyData = [
          {
            name: "Budi Santoso",
            position: "HRD Manager",
            company: "PT. Maju Bersama",
            message:
              "Pelatihan yang sangat berkualitas! Tim kami mendapatkan banyak insight baru yang langsung bisa diterapkan di perusahaan.",
            image: "",
            rating: 5,
          },
          {
            name: "Siti Nurhaliza",
            position: "CEO",
            company: "CV. Sukses Sejahtera",
            message:
              "Program training dari PT MPN sangat membantu meningkatkan produktivitas tim. Highly recommended!",
            image: "",
            rating: 5,
          },
          {
            name: "Ahmad Wijaya",
            position: "Training Coordinator",
            company: "PT. Global Indonesia",
            message:
              "Instruktur yang berpengalaman dan materi yang komprehensif. Kami sangat puas dengan hasilnya.",
            image: "",
            rating: 5,
          },
        ];
        setTestimonials(dummyData);
      } else {
        setTestimonials(data);
      }

      setLoading(false);
    };
    getTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="testimonials-section py-5 text-center">
        <div className="spinner-border text-primary" />
      </section>
    );
  }

  return (
    <section className="testimonials-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-gradient">Apa Kata Mereka</h2>
          <p className="lead text-muted">
            Testimoni dari klien dan peserta pelatihan kami
          </p>
        </div>

        <Row>
          <Col lg={12}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard
                    name={testimonial.name}
                    position={testimonial.position}
                    company={testimonial.company}
                    message={testimonial.message}
                    image={testimonial.image}
                    rating={testimonial.rating}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
