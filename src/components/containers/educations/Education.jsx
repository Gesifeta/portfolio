import { educations } from "./../data.js";
import EducationCard from "../../card/EducationCard";

import "./Education.css";
const Education = () => {
  return (
    <div className="container-educations" id="educations">
      <h2 style={{ textAlign: "center" }}>Educations</h2>
      <div className="educations">
        {educations.map((education, index) => (
          <EducationCard
            key={`${education.nameOfAward}-${index}`}
            nameOfAward={education.nameOfAward}
            institution={education.institution}
            address={education.companyAddress.address.city}
            startDate={education.startDate}
            endDate={education.endDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
