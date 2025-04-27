import "./EducationCard.css";

const EducationCard = ({
  name_of_award,
  institution,
  city,
  country,
  field_of_study,
  level,
  start_year,
  end_year,
}) => {
  return (
    <div className="education">
      <div className="education-year">
        <span>{start_year}</span>
        <span>-</span>
        <span>{end_year}</span>
      </div>
      <div className="education-details">
        <div className="education-title">
          <h3>{name_of_award}</h3>
          <small>{field_of_study}</small>
          <h4 style={{ color: "gray" }}>{institution} </h4>
        </div>
        <p style={{ color: "white" }}>
          {city}, {country}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
