import React from "react";
import { Modal, Button } from "react-bootstrap";
import { WA_NUMBER } from "../data/training";
import API_BASE_URL from "../utils/apiConfig";

const TrainingDetailModal = ({ show, onClose, data }) => {
  if (!data) return null;

  const handleWhatsApp = () => {
    const message = `Halo, saya ingin mendaftar untuk pelatihan "${data.nama_jenis}".`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{data.nama_jenis}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={
            data.foto
              ? `${API_BASE_URL}/uploads/${data.foto}`
              : "/default-training.jpg"
          }
          alt={`Poster pelatihan ${data.nama_jenis}`}
          className="img-fluid rounded mb-3"
        />

        <p>{data.deskripsi || "Deskripsi pelatihan belum tersedia."}</p>

        {data.bidang_usaha?.nama_BUsaha && (
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
        <Button
          variant="primary"
          onClick={handleWhatsApp}
          disabled={!data?.nama_jenis}
        >
          Daftar via WhatsApp
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TrainingDetailModal;