import React from "react";

const EducationCard = ({
  image,
  institution,
  nameOfAward,
  companyAddress,
  awards,
}) => {
  return (
    <section className="app__experiencecard">
      <div className="app__experiencecard-position">
        <span className="app__experience-tenure--spot"></span>
        {nameOfAward}
      </div>
      <div className="app__experiencecard-company">
        <div className="app__experiencecard-company--image">
          <img src={image} alt="" />
          <p className="app__experiencecard-campany--name">
            {institution}
          </p>
        </div>
        <div className="app__experiencecard-address">
          {companyAddress.address?.city},{" "}
          {companyAddress?.address?.country}
        </div>
      </div>
      <div className="app__experiencecard-responsibility">
        <ul>
          {awards.map((award, index) => (
            <li key={`${award}-${index}`}>{award}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EducationCard;
