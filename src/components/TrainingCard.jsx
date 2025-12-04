import React from "react";
import { Button } from "react-bootstrap";

const TrainingCard = ({ item, onOpen, index = 0 }) => {
  return (
    <div className="col-md-4 col-sm-6 fade-in-up">
      <div className="card h-100 shadow-sm">
        <img
          src={item.image}
          className="card-img-top"
          alt={item.title}
          style={{ height: "200px", objectFit: "cover", animationDelay: `${index * 0.15}s` }}
        />

        <div className="card-body">
          <h5 className="card-title fw-semibold">{item.title}</h5>
          <p className="card-text text-muted">{item.shortDesc}</p>

          <button className="btn btn-primary" onClick={() => onOpen(item)}>
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
