import React from "react";
import TeamCard from "../components/TeamCard";
import { teamData } from "../data/team";
import "../styling/pages/OurTeam.css"; // Pastikan menggunakan CSS khusus untuk halaman ini jika perlu
import "../index.css";  // Mengimpor index.css untuk menggunakan variabel dan style global
import usePageMeta from "../utils/usePageMeta";
import { Container, Row, Col } from "react-bootstrap";

// Pages Tim Kami
function OurTeam() {
  usePageMeta({
    title: "Tim PT MPN — Profesional & Berpengalaman",
    description:
      "Berkenalan dengan tim PT MPN yang profesional dan berpengalaman di bidang pelatihan dan pengembangan SDM.",
    ogType: "website",
  });

  const director = teamData.find((m) => m.position === "Direktur Utama");
  const others = teamData.filter((m) => m.position !== "Direktur Utama");

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <header className="title-section py-4 text-center">
            <h1 className="display-4 fw-bold text-gradient">
              Tim Kami
            </h1>
          </header>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-light">
        <Container>
          <div className="fade-in">
            {/* Card Direktur Utama */}
            {director && (
              <div className="main-director fade-in">
                <Row className="justify-content-center">
                  <Col  className="mb-4">
                    <TeamCard
                      name={director.name}
                      position={director.position}
                      image={director.image}
                      description={director.description}
                      isDirector={true}
                    />
                  </Col>
                </Row>
              </div>
            )}

            {/* Grid Tim */}
            <div className="team-grid fade-in">
              <Row className="justify-content-center">
                {others.map((member, index) => (
                  <Col md={6} lg={4} key={member.id || index} className="mb-4">
                    <TeamCard
                      name={member.name}
                      position={member.position}
                      image={member.image}
                      description={member.description}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default OurTeam;
