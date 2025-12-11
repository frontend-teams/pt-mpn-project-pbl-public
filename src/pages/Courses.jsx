import React from "react";
import { FaClock, FaLaptop, FaCalendar } from "react-icons/fa";

import img1 from "../assets/courses/digital_marketing.jpg";
import img2 from "../assets/courses/business_consulting.jpg";
import img3 from "../assets/courses/lead_generation.jpg";

const courses = [
  {
    title: "Digital Marketing",
    days: "2 Hari",
    type: "Online",
    description:
      "Maximize online visibility with paid ads, social media, and strategic SEO to drive targeted traffic and higher conversions.",
    image: img1,
  },
  {
    title: "Business Consulting",
    days: "2 Hari",
    type: "Online",
    description:
      "Enhance business strategy, optimize core processes, and leverage real-time analytics for sustainable growth.",
    image: img2,
  },
  {
    title: "Lead Generation",
    days: "4 Hari",
    type: "Online",
    description:
      "Optimize advanced funnels, automate processes, and boost customer conversions to generate leads.",
    image: img3,
  },
  {
    title: "SEO",
    days: "1 Hari",
    type: "Online",
    description:
      "Optimize advanced funnels, automate processes, and boost customer conversions to generate leads.",
    image: img1,
  },
  {
    title: "Optimasi SEO",
    days: "2 Hari",
    type: "Online",
    description:
      "Optimize advanced funnels, automate processes, and boost customer conversions to generate leads.",
    image: img2,
  },
  {
    title: "Lead Generation",
    days: "2 Hari",
    type: "Online",
    description:
      "Optimize advanced funnels, automate processes, and boost customer conversions to generate leads.",
    image: img3,
  },
];

const Courses = () => {
  return (
    <section className="courses-section py-5">
      <div className="container text-center">

        <h2 className="fw-bold">Pelatihan</h2>
        <p className="text-muted mb-4">
          Comprehensive solutions for business success.
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

                <div className="course-content p-3 text-white">
                  <h5 className="fw-semibold">{course.title}</h5>

                  <div className="d-flex gap-3 align-items-center small mt-2">
                    <span><FaClock className="me-1" /> {course.days}</span>
                    <span><FaLaptop className="me-1" /> {course.type}</span>
                  </div>

                  <p className="mt-2 small text-light opacity-75">
                    {course.description}
                  </p>

                  <button className="btn btn-outline-light btn-sm w-100 rounded-3 mt-2 fw-semibold">
                    Lihat Pelatihan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary mt-4 px-4 rounded-3 more-btn">
          <a href="/training" style={{textDecoration: "none", color: "white"}}>Lihat lebih banyak</a>
        </button>

      </div>
    </section>
  );
};

export default Courses;
