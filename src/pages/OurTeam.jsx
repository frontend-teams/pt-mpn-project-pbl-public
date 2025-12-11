import React from "react";
import TeamCard from "../components/TeamCard";
import{ teamData } from "../data/TeamData";
import "../styling/pages/OurTeam.css";

function OurTeam() {
  const director = teamData.find((m) => m.position === "Direktur Utama");
  const others = teamData.filter((m) => m.position !== "Direktur Utama");

  return (
    <section className="team-section section-padding bg-light">
      <div className="container">
        <div className="fade-in">
          <h1 className="team-title">Tim Kami</h1>
          <p className="team-subtitle">
            Perkenalkan orang-orang yang mendedikasikan diri untuk membangun, mendukung, dan mengembangkan perusahaan kami.
          </p>
        </div>

        {/* Card Direktur Utama */}
        {director && (
          <div className="main-director fade-in">
            <TeamCard
              name={director.name}
              position={director.position}
              image={director.image}
              description={director.description}
              isDirector={true}
            />
          </div>
        )}

        {/* Grid Tim */}
        <div className="team-grid fade-in">
          {others.map((member, index) => (
            <TeamCard
              key={member.id || index}
              name={member.name}
              position={member.position}
              image={member.image}
              description={member.description}
              // isDirector defaultnya false/tidak ada
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;