import React, { useState, useEffect } from "react";
import { FaLaptop } from "react-icons/fa";
import { fetchJenisUsaha } from "../api/jenisUsahaApi";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom
import API_BASE_URL from "../api/apiConfig";
import { Button } from "react-bootstrap";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      try {
        setLoading(true);
        const data = await fetchJenisUsaha(6); // Ambil 6 data pelatihan
        console.log("🎓 Courses data received:", data);
        console.log("📊 Total courses:", data?.length || 0);
        setCourses(data || []);
      } catch (error) {
        console.error("❌ Gagal fetch courses:", error);
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

        {courses.length === 0 ? (
          <div
            className="alert alert-info mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5>📚 Belum Ada Data Pelatihan</h5>
            <p className="mb-0">
              Data pelatihan belum tersedia. Silakan tambahkan melalui admin
              panel atau hubungi administrator.
            </p>
          </div>
        ) : (
          <div className="row g-4">
            {courses.map((course) => (
              <div className="col-md-4" key={course.id}>
                {/* Membungkus card dengan Link agar bisa diklik */}
                <Link
                  to={`/training/${course.id}`} // Arahkan ke halaman detail pelatihan
                  className="text-decoration-none" // Menghilangkan garis bawah pada link
                >
                  <div className="course-card shadow-sm">
                    <img
                      src={
                        course.foto
                          ? course.foto.startsWith("http")
                            ? course.foto
                            : `${API_BASE_URL}/uploads/${course.foto}`
                          : "/default-training.jpg"
                      }
                      className="img-fluid course-img"
                      alt={course.nama_jenis}
                      loading="lazy"
                      width="600"
                      height="160"
                      onError={(e) => {
                        console.error("❌ Failed to load image:", course.foto);
                        console.error("Full URL attempted:", e.target.src);
                        e.target.src = "/default-training.jpg";
                      }}
                    />

                    <div className="course-content p-3 text-black text-start">
                      <h5 className="fw-semibold">{course.nama_jenis}</h5>
                      <p className="mt-2 small text-dark opacity-75">
                        {course.deskripsi}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Tombol "Lihat Lebih Banyak" - hanya tampil jika ada data */}
        {courses.length > 0 && (
          <div className="text-center mt-5">
            <Button as={Link} to="/training" variant="outline-primary">
              Lihat Lebih Banyak Pelatihan
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
