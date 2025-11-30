import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { companyInfo } from "../data/company";
import "../styling/components/CTASection.css";
import "../index.css";

function CTASection() {
  const phone = companyInfo?.contact?.phone || "";

  // Convert nomor lokal Indo -> format WA internasional
  const normalizePhone = phone
    .replace(/\D/g, "") // hapus selain angka
    .replace(/^0/, "62"); // ganti 0 di awal jadi 62
  console.log(normalizePhone);
  

  const whatsappMessage =
    "Halo Admin, saya ingin bertanya mengenai program pelatihan.";

  const whatsappLink = `https://wa.me/${normalizePhone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="section-padding">
      <Container>
        <Row>
          <Col lg={10} className="fade-in justify-content-center mx-auto">
            <Card className="bg-gradient-primary text-white border-0 shadow-custom cta-card">
              <Card.Body className="p-5 text-center">
                <h2 className="section-title-cta">
                  Siap Meningkatkan Kompetensi Anda?
                </h2>
                <p className="section-subtitle text-white">
                  Hubungi kami sekarang untuk konsultasi gratis dan temukan
                  program pelatihan yang tepat untuk kebutuhan Anda
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
                  <Button
                    as="a"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="md"
                    className="cta-btn"
                  >
                    <i class="bi bi-whatsapp"></i> Hubungi Admin Kami
                  </Button>

                  <Button
                    as={Link}
                    to="/training"
                    variant="outline-light"
                    size="md"
                    className="cta-btn-outline"
                  >
                    Lihat Program Pelatihan
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CTASection;
