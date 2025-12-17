import React from "react";
import { Button } from "react-bootstrap";

const TrainingCard = ({ item, onOpen, index = 0 }) => {
  return (
    <div
      className="col-md-4 col-sm-6 fade-in-up"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className="card shadow-lg border rounded-4 p-3 h-100">
        <img
          src={item.image}
          className="card-img-top"
          alt={item.title}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title fw-semibold">{item.title || item.nama || "Pelatihan"}</h5>
          <p className="card-text text-muted training-card-desc">
            {item.desc || item.description}
          </p>

          <button className="btn btn-link p-0" onClick={() => onOpen(item)}>
            Lihat selengkapnya...
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
