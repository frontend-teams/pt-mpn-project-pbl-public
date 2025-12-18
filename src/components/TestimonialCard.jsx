import React from "react";
import "../styling/components/TestimonialCard.css";

const TestimonialCard = ({
  name,
  position,
  company,
  message,
  image,
  rating,
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-avatar">
          <img
            src={image || "https://via.placeholder.com/80"}
            alt={name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://via.placeholder.com/80";
            }}
          />
        </div>
        <div className="testimonial-info">
          <h4 className="testimonial-name">{name}</h4>
          <p className="testimonial-position">{position}</p>
          {company && <p className="testimonial-company">{company}</p>}
        </div>
      </div>

      {rating && (
        <div className="testimonial-rating">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`bi bi-star${index < rating ? "-fill" : ""}`}
            ></i>
          ))}
        </div>
      )}

      <div className="testimonial-message">
        <i className="bi bi-quote quote-icon"></i>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
