import React from "react";
import { ExternalLink } from "lucide-react";
import { IMAGE_URL } from "../../utils/constants";

import "./CertificationCard.css";

const CertificationCard = ({
  category,
  title,
  awarded_by,
  awarded_date,
  expiration_date,
  certification_link,
  certification_number,
  image_url,
  icon_url,
}) => {
  return (
    <div className="certification">
      <div className="certification-category">{category.toUpperCase()}</div>

      <div className="certification-details">
        <div>
          <div className="certification-title">
            <h3 style={{ color: "gray" }}>{title}</h3>
          </div>
          <div className="certification-issued-by">
            <span>
              <img src={`${IMAGE_URL}/${image_url}`} alt="" />
            </span>
            <span>{awarded_by}</span>
          </div>
        </div>
        <div>
          <p style={{ display: "flex", gap: "1rem" }}>
            <span style={{ fontWeight: 700, opacity: 0.75 }}>
              Certification Number:
            </span>
            <span>{certification_number}</span>
          </p>
          <div className="certification-issue-date">
            Issue Date: {awarded_date.slice(0, 10)}
          </div>
          <div className="certification-expiry-date">
            Expiry Date: {expiration_date}
          </div>
        </div>
        <div className="certification-link">
          <a href={certification_link} target="_blank" rel="noreferrer">
            <span>View Certificate</span>{" "}
            <span>
              <ExternalLink />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
