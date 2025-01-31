import React from "react";

import EducationCard from "../../card/EducationCard.jsx";
import { educations } from "../../../data/educations.js";
import "./Education.css";
const Education = () => {
  return (
    <div className="container-educations" id="eduations">
      <h2 style={{textAlign:"center"}}>Educations</h2>
      <div className="educations">
        {educations.map((education, index) => (
          <EducationCard
            key={`${education.nameOfAward}-${index}`}
            nameOfAward={education.nameOfAward}
            institution={education.institution}
            address={education.address}
            startDate={education.startDate}
            endDate={education.endDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
