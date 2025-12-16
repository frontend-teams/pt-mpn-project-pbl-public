import React, { useState, useEffect } from "react";
import { FaLaptop } from "react-icons/fa";
import { fetchJenisUsaha } from "../utils/jenisUsahaApi";
import API_BASE_URL from "../utils/apiConfig";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      try {
        setLoading(true);
        const data = await fetchJenisUsaha(6); // Ambil 6 data pelatihan
        setCourses(data || []);
      } catch (error) {
        console.error("Gagal fetch courses:", error);
      } finally {
        setLoading(false);
      }
    };
    getCourses();
  }, []);

  if (loading) {
    return (
      <section className="courses-section py-5 text-center">
        <div className="spinner-border text-primary" />
      </section>
    );
  }

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
          {courses.map((course) => (
            <div className="col-md-4" key={course.id}>
              <div className="course-card shadow-sm">
                <img
                  src={
                    course.foto
                      ? `${API_BASE_URL}/uploads/${course.foto}`
                      : "/default-training.jpg"
                  }
                  className="img-fluid course-img"
                  alt={course.nama_jenis}
                  loading="lazy"
                  width="600"
                  height="160"
                />

                <div className="course-content p-3 text-black text-start">
                  <h5 className="fw-semibold">{course.nama_jenis}</h5>
                  <p className="mt-2 small text-dark opacity-75">
                    {course.deskripsi}
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
