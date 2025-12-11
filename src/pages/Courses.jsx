import React from "react";
import { FaClock, FaLaptop, FaCalendar } from "react-icons/fa";

import img1 from "../assets/courses/digital_marketing.jpg";
import img2 from "../assets/courses/business_consulting.jpg";
import img3 from "../assets/courses/lead_generation.jpg";

const courses = [
  {
    title: "Pelatihan Soft Skill",
    days: "2 Hari",
    type: "Online",
    description:
      "Pelatihan Soft Skill dirancang untuk meningkatkan kemampuan non-teknis yang sangat dibutuhkan dalam dunia kerja modern.",
    image: img1,
  },
  {
    title: "Pelatihan Administrasi Perkantoran",
    days: "2 Hari",
    type: "Online",
    description:
      "Pelatihan ini memberikan keterampilan praktis yang dibutuhkan staf administrasi dan perkantoran agar dapat bekerja secara efisien dan profesional.",
    image: img2,
  },
  {
    title: "Pelatihan Kewirausahaan & UMKM",
    days: "4 Hari",
    type: "Offline",
    description:
      "Pelatihan Kewirausahaan & UMKM ditujukan untuk membekali peserta dengan kemampuan merencanakan, mengelola, dan mengembangkan usaha secara berkelanjutan.",
    image: img3,
  },
  {
    title: "Pelatihan Digital",
    days: "1 Hari",
    type: "Online",
    description:
      "Pelatihan Digital berfokus pada peningkatan kompetensi teknologi peserta agar mampu beradaptasi dengan kebutuhan dunia kerja yang serba digital.",
    image: img1,
  },
  {
    title: "Pelatihan Operator Alat Berat",
    days: "2 Hari",
    type: "Offline",
    description:
      "Pelatihan Operator Alat Berat dirancang untuk membekali peserta dengan keterampilan teknis dan pengetahuan keselamatan dalam mengoperasikan berbagai jenis alat berat.",
    image: img2,
  },
  {
    title: "Pelatihan Welding (SMAW, MIG, TIG)",
    days: "2 Hari",
    type: "Offline",
    description:
      "Pelatihan ini memberikan keterampilan praktis pengelasan untuk berbagai metode seperti SMAW, MIG, dan TIG.",
    image: img3,
  },
];

const Courses = () => {
  return (
    <section className="courses-section py-5">
      <div className="container text-center">
        <h2 className="display-4 fw-bold text-gradient pb-1 mb-2 text-center">
          Pelatihan
        </h2>
        <p className="text-muted mb-4">
          Jelajahi berbagai program pelatihan kami yang dirancang untuk
          meningkatkan keterampilan dan pengetahuan Anda dalam berbagai bidang.
        </p>

        <div className="row g-4">
          {courses.map((course, index) => (
            <div className="col-md-4" key={index}>
              <div className="course-card shadow-sm">
                <img
                  src={course.image}
                  className="img-fluid course-img"
                  alt={course.title}
                />

                <div className="course-content p-3 text-black text-start">
                  <h5 className="fw-semibold">{course.title}</h5>

                  <div className="d-flex gap-3 align-items-center small mt-2">
                    {/* <span>
                      <FaClock className="me-1" /> {course.days}
                    </span> */}
                    <span>
                      <FaLaptop className="me-1" /> {course.type}
                    </span>
                  </div>

                  <p className="mt-2 small text-dark opacity-75">
                    {course.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary mt-4 px-4 rounded-3 more-btn">
          <a
            href="/training"
            style={{ textDecoration: "none", color: "white" }}
          >
            Lihat lebih banyak ...
          </a>
        </button>
      </div>
    </section>
  );
};

export default Courses;
