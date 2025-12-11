import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { companyInfo } from "../data/company";
import "../styling/pages/Contact.css";
import "../index.css";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";

function Contact() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [layanan, setLayanan] = useState("");
    const [isi, setIsi] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://202.10.47.174:8000/api/pesan/add/", {
                name_pesan: nama,
                email_pesan: email,
                layanan_pesan: layanan,
                pesan_isi: isi
            })
            .then(response => {
                setNama("");
                setEmail("");
                setLayanan("");
                setIsi("");
                console.log(response);
            })
            .catch(error => {
                alert("Gagal terkirim:", error);
                // console.error("Gagal menyimpan data:", error);
            })
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <Container>
                    <motion.div
                        className="text-center fade-in"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="display-4 fw-bold text-gradient pb-1 mb-2">
                            Mari terhubung dan wujudkan ide Anda
                        </h1>
                        <p className="fs-5 text-muted">
                            Kami ingin sekali mendengar dari Anda! Isi formulir di bawah ini, <br />dan mari kita bahas
                            bagaimana kami dapat membantu Anda mencapai tujuan Anda.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Contact Form Section */}
            <section className="section-padding bg-light">
                <motion.div
                    className="text-center mb-5 fade-in"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Hubungi Kami</h2>
                </motion.div>
                <Container>
                    <Row className="g-4">
                        <Col lg={6} className="fade-in">
                            <Card className="card-custom shadow-sm h-100">
                                <Card.Body className="p-4">
                                    <div className="ratio ratio-16x9 shadow-custom">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d569.3495873704287!2d106.95718165797548!3d-6.370698770623537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjInMTMuOSJTIDEwNsKwNTcnMjYuNiJF!5e0!3m2!1sen!2sid!4v1764211390505!5m2!1sen!2sid"
                                            loading="lazy"
                                            allowFullScreen
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                    <div className="text-center my-4">
                                        <p>
                                            <i className="bi bi-geo-alt fs-4 me-2 mt-1 text-gradient"></i><a href="https://maps.app.goo.gl/moAyGBTCi9TcRVs46">{companyInfo.contact.address}</a>
                                        </p>
                                    </div>
                                    <p className="text-center">
                                        <b>KONTAK DAN SOCIAL MEDIA</b>
                                    </p>
                                    <ul className="list-unstyled mb-0">
                                        <li className="d-flex align-items-center justify-content-center mb-3">
                                            <i className="bi bi-telephone me-2 mt-1 fs-5 text-gradient"></i>
                                            <a href={`tel:${companyInfo.kontak.phone}`}>0821-1472-6830</a>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-center mb-3">
                                            <i className="bi bi-instagram me-2 mt-1 fs-5 text-gradient"></i>
                                            <a href={companyInfo.sosial_media.instagram}>ptmpn.official</a>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-center mb-3">
                                            <i className="bi bi-youtube me-2 mt-1 fs-5 text-gradient"></i>
                                            <a href={companyInfo.sosial_media.youtube}>Mitra Pelatihan Nasional</a>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-center mb-3">
                                            <i className="bi bi-facebook me-2 mt-1 fs-5 text-gradient"></i>
                                            <a href={companyInfo.sosial_media.facebook}>PT Multiartha Pundimas Nawasena</a>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-center mb-3">
                                            <i className="bi bi-envelope-fill me-2 mt-1 fs-5 text-gradient"></i>
                                            <a href={`mailto:${companyInfo.kontak.email}`}>{companyInfo.contact.email}</a>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} className="fade-in">
                            <Card className="card-custom shadow-sm h-100">
                                <Card.Body className="p-4">
                                    <form onSubmit={handleSubmit}>
                                        <motion.div
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <div className="mb-3">
                                                <label className="form-label text-gradient">Masukkan nama lengkap anda.</label>
                                                <input type="text" className="form-control" placeholder="Jane Smith" value={nama} onChange={(e) => setNama(e.target.value)} />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label text-gradient">Masukkan email yang valid untuk mendapatkan respons.</label>
                                                <input type="email" className="form-control" placeholder="janesmith@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label text-gradient">Layanan apa yang Anda minati??</label>
                                                <input type="text" className="form-control" placeholder="Konsultasi Bisnis" value={layanan} onChange={(e) => setLayanan(e.target.value)} />
                                            </div>

                                            <div className="mb-4">
                                                <label className="form-label text-gradient">Jelaskan detail atau persyaratan spesifik apa pun.</label>
                                                <textarea className="form-control " rows="4" placeholder="Pesan Anda..." value={isi} onChange={(e) => setIsi(e.target.value)} style={{ height: "340px" }}></textarea>
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                                className="btn btn-primary-custom w-100"
                                                style={{ backgroundColor: "#3b6cf5" }}
                                            >
                                                Submit
                                            </motion.button>
                                        </motion.div>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Contact;
