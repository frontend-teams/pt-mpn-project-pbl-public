import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import team1 from "../assets/team/pak-doddy.jpeg";
import team2 from "../assets/team/pak-ibob.jpeg";
import team3 from "../assets/team/Larry.jpg";
import team4 from "../assets/team/skyler.jpg";

const baseTeamMembers = [
  {
    id: 1,
    name: "Doddy",
    role: "Owner",
    img: team1,
    link: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Ibob",
    role: "Co-Owner",
    img: team2,
    link: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Larry",
    role: "God",
    img: team3,
    link: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Skyler",
    role: "Manager",
    img: team4,
    link: "https://linkedin.com",
  },
];

const teamMembers = [
  ...baseTeamMembers,
  ...baseTeamMembers,
  ...baseTeamMembers,
];

const Team = () => {
  return (
    <section className="py-5">
      <h1 className="text-center fw-bold">Meet our amazing team.</h1>
      <p className="text-center text-muted mb-5">
        Strategists, designers, and innovators.
      </p>

      <div className="fade-edges-wrapper w-100" style={{ height: "330px" }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={"auto"}
          watchSlidesProgress={true}
          freeMode={true}
          loop={true}
          loopedSlides={6}
          speed={5000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="h-100"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide
              key={`${member.id}-${index}`}
              style={{ width: "263px" }}
            >
              <div
                className="team-card position-relative overflow-hidden"
                style={{
                  width: "263px",
                  height: "330px",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-100 h-100 team-img"
                  style={{ objectFit: "cover", transition: "0.3s ease" }}
                />

                <div
                  className="position-absolute bottom-0 w-100 text-center text-white pb-3"
                  style={{ zIndex: 2, textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                >
                  <h5 className="mb-0">{member.name}</h5>
                  <small>{member.role}</small>
                </div>

                <div
                  className="team-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    opacity: 0,
                    transition: "0.3s",
                  }}
                >
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light rounded-pill px-4"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .team-card:hover .team-img {
          filter: blur(4px);
          transform: scale(1.05);
        }
        .team-card:hover .team-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Team;
