import React from "react";

import "./ExperienceCard.css";

function ExperienceCard({
  position,
  companyName,
  address,
  responsibilities,
  startDate,
  endDate,
}) {
  return (

      <div className="experience">
        <div className="experience-years">
          <span>{startDate}</span>
          <span>-</span>
          <span>{endDate}</span>
        </div>
        <div className="experience-details">
          <div className="experience-title">
            <h3>{position}</h3>
            <h4 style={{ color: "gray" }}>{companyName}</h4>
            <p className="small">{address.city}, {address.country}</p>
          </div>
          <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
  );
}

export default ExperienceCard;
