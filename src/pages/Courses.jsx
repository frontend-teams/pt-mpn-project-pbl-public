import React, { useEffect, useState } from "react";
import { FaLaptop } from "react-icons/fa";
import { fetchJenisUsaha } from "../utils/publicApi";
import { resolveUploadUrl } from "../utils/imageUrl";
import trainings from "../data/training";

const Courses = () => {
  const [courses, setCourses] = useState(trainings);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchJenisUsaha();
        if (res && res.length) {
          const mapped = res.map((item) => ({
            id: item.id,
            title: item.nama_jenis,
            type: item.status || "Aktif",
            description: item.deskripsi,
            image: resolveUploadUrl(item.foto),
          }));
          setCourses(mapped);
        }
      } catch (error) {
        console.warn("Gagal memuat jenis usaha, gunakan fallback", error);
      }
    };
    load();
  }, []);

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
            <div className="col-md-4" key={course.id || index}>
              <div className="course-card shadow-sm">
                <img
                  src={course.image}
                  className="img-fluid course-img"
                  alt={course.title}
                  loading="lazy"
                  width="600"
                  height="160"
                />

                <div className="course-content p-3 text-black text-start">
                  <h5 className="fw-semibold">{course.title}</h5>

                  <div className="d-flex gap-3 align-items-center small mt-2">
                    {/* <span>
                      <FaClock className="me-1" /> {course.days}
                    </span> */}
                    <span>
                      <FaLaptop className="me-1" /> {course.type || "Pelatihan"}
                    </span>
                  </div>

                  <p className="mt-2 small text-dark opacity-75">
                    {course.description || course.desc}
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
