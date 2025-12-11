import React from "react";
import "../styling/components/TeamCard.css";

const TeamCard = ({ name, position, image, description, isDirector }) => {
  const cardClasses = `team-card ${isDirector ? 'is-director' : ''}`;

  return (
    <div className={cardClasses}>
      <div className="team-card-image">
        <img src={image || "placeholder-image.jpg"} alt={name} />
      </div>

      <h3 className="team-card-name">{name}</h3>
      <p className="team-card-position">{position}</p>
      <p className="team-card-description text-muted">{description}</p>
    </div>
  );
};

export default TeamCard;