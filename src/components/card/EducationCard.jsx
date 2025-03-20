import "./EducationCard.css";

const EducationCard = ({
  nameOfAward,
  institution,
  address,
  startDate,
  endDate,
}) => {
  return (
    <div className="education">
      <div className="education-year">
        <span>{startDate}</span>
        <span>-</span>
        <span>{endDate}</span>
      </div>
      <div className="education-details">
        <div className="education-title">
          <h3>{nameOfAward}</h3>
          <h4 style={{ color: "gray" }}>{institution} </h4>
        </div>

        <p style={{ color: "white" }}>
          {address.city}, {address.country}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
