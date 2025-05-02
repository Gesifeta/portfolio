import "./ExperienceCard.css";

function ExperienceCard({
  position,
  company_name,
  city,
  country,
  responsibilities,
  start_year,
  end_year,
}) {
  return (
    <div className="experience">
      <div className="experience-years">
        <span>{start_year}</span>
        <span>-</span>
        <span>{end_year}</span>
      </div>
      <div className="experience-details">
        <div className="experience-title">
          <h3>{position}</h3>
          <h4 style={{ color: "gray" }}>{company_name}</h4>
          <p className="small">
            {city}, {country}
          </p>
        </div>
        {/* <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul> */}
      </div>
    </div>
  );
}

export default ExperienceCard;
