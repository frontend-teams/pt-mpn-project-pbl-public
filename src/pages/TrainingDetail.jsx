import React from "react";
import { Modal, Button } from "react-bootstrap";
import { WA_NUMBER } from "../data/training";

const TrainingDetailModal = ({ show, onClose, data }) => {
  if (!data) return null;

  const handleWhatsApp = () => {
    const WA_NUMBER = "6282114726830";
    const message = `Halo, saya ingin mendaftar untuk pelatihan "${data.nama_jenis}".`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{data.nama_jenis}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={`https://api.ptmpn.com/uploads/${data.foto}`}
          alt={data.nama_jenis}
          className="img-fluid rounded mb-3"
        />

        <p>{data.deskripsi}</p>

        {data.bidang_usaha && (
          <div className="mt-4">
            <h6 className="fw-semibold">Bidang Usaha</h6>
            <p>{data.bidang_usaha.nama_BUsaha}</p>
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
