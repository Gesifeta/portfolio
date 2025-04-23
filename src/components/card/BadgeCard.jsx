import React from "react";
import { ExternalLink } from "lucide-react";

import "./BadgeCard.css";
import { IMAGE_URL } from "../../utils/constants";

const BadgeCard = ({
  title,
  description,
  badgeLink,
  awardedBy,
  skills,
  image,
}) => {
  return (
    <div className="badge">
      <div className="container-badge-detail">
        <div className="badge-image">
          <img src={`${IMAGE_URL}/${image}`} alt={`${title}`} />
          <p className="awarded-by">Awarded by: {awardedBy}</p>
        </div>
        <div className="badge-detail">
          <div className="detail">
            <h3>{title}</h3>
            <p className="description">{description}</p>
          </div>
          <h3>Skills covered:</h3>
          <div className="badge-skills">
            {skills.map((skill, index) => (
              <span key={`${skill}-${index}`}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="badge-link">
        <span>
          <a
            href={`${badgeLink}`}
            referrerPolicy=" no-referrer "
            target="_blank "
          >
            <span>Verify </span> <ExternalLink />
          </a>
        </span>
      </div>
    </div>
  );
};

export default BadgeCard;
