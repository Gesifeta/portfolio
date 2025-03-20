import "./Experiences.css";
import { experiences } from "../../../data/experience.js";
import ExperienceCard from "../../card/ExperienceCard.jsx";

function Experiences() {
  return (
    <div className="experiences" id="experiences">
      <h2 style={{ textAlign: "center" }}>Experiences</h2>
      <div className="container-experiences">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.companyName}-${index}`}
            companyName={experience.companyName}
            address={experience.address}
            position={experience.position}
            responsibilities={experience.responsibilities}
            startDate={experience.startDate}
            endDate={experience.endDate}
          />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
