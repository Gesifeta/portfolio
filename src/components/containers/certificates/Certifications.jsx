import React from "react";

import { certifications } from "./../data.js";
import CertificationCard from "../../card/CertificationCard";
import "./Certifications.css";

const Certifications = () => {
  return (
    <div className="container-certifications" id="certifications">
      <h2 style={{ textAlign: "center" }}>Certifications</h2>
      <>
        {certifications.map((certification, index) => (
          <CertificationCard
            key={`${certification.title}-${index}`}
            category={certification.category}
            title={certification.title}
            issuedBy={certification.issuedBy}
            issueDate={certification.issueDate}
            expiryDate={certification.expiryDate}
            certificationLink={certification.certificationLink}
            certificationNumber={certification.certificationNumber}
            icon={certification.icon}
          />
        ))}
      </>
    </div>
  );
};

export default Certifications;
