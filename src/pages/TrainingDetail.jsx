import React from "react";
import { Modal, Button } from "react-bootstrap";

const TrainingDetailModal = ({ show, onClose, onSubmit, data }) => {
  if (!data) return null;

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
        <p>{data.longDesc}</p>

        {data.materials && data.materials.length > 0 && (
          <div>
            <h6 className="fw-semibold">Materi</h6>
            <ol className="mb-0">
              {data.materials.map((m, idx) => (
                <li key={idx}>{m}</li>
              ))}
            </ol>
          </div>
        )}

        {data.detail && data.detail.length > 0 && (
          <div className="mt-4">
            <h6 className="fw-semibold">Detail Pelatihan</h6>
            <ul className="mb-0">
              {data.detail.map((d, idx) => (
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
        <Button variant="primary" onClick={onSubmit}>
          Daftar Pelatihan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TrainingDetailModal;
