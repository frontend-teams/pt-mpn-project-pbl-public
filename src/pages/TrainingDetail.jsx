import React from "react";
import { Modal, Button } from "react-bootstrap";

const TrainingDetailModal = ({ show, onClose, data }) => {
  if (!data) return null;

  const handleWhatsApp = () => {
    const WA_NUMBER = "6282114726830";
    const message = `Halo, saya ingin mendaftar untuk pelatihan "${data.title}".`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={data.image}
          alt={data.title}
          className="img-fluid rounded mb-3"
        />
        <p>{data.desc}</p>

        {data.jenisPelatihan && data.jenisPelatihan.length > 0 && (
          <div className="mt-4">
            <h6 className="fw-semibold">Jenis Pelatihan</h6>
            <ul className="mb-0">
              {data.jenisPelatihan.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Tutup
        </Button>
        <Button variant="primary" onClick={handleWhatsApp}>
          Daftar via WhatsApp
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TrainingDetailModal;
