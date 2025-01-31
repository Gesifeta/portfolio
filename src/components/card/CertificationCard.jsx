import React from "react";
import { ExternalLink } from "lucide-react";

import "./CertificationCard.css";

const CertificationCard = ({
  category,
  title,
  issuedBy,
  issueDate,
  expiryDate,
  certificationLink,
  certificationNumber,
  icon,
}) => {
  return (
    <div className="certification">
      <div className="certification-category">{category}</div>

      <div className="certification-details">
        <div>
          <div className="certification-title">
            <h3 style={{ color: "gray" }}>{title}</h3>
          </div>
          <div className="certification-issued-by">
            <span>
              <img src={`${icon}`} alt="" />
            </span>
            <span>{issuedBy}</span>
          </div>
        </div>
        <div>
        <p style={{ display: "flex", gap: "1rem" }}>
          <span style={{ fontWeight: 700, opacity: 0.75 }}>
            Certification Number:
          </span>
          <span>{certificationNumber}</span>
        </p>
        <div className="certification-issue-date">Issue Date: {issueDate}</div>
        <div className="certification-expiry-date">
          Expiry Date: {expiryDate}
        </div>
        </div>
        <div className="certification-link">
          <a href={certificationLink} target="_blank" rel="noreferrer">
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
