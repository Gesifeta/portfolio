import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import CertificationCard from "../../card/CertificationCard";
import { API_URL } from "../../../utils/constants.js";

import "./Certifications.css";

const Certifications = () => {
  // success message
  const [successMessage, setSuccessMessage] = useState("");
  // error message
  const [errorMessage, setErrorMessage] = useState({
    message: null,
    error: null,
  });

  const {
    data: certifications,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["certifications"],
    queryFn: async () => {
      return await fetch(`${API_URL}/certifications`).then((res) => res.json());
    },
    isError: (error) => {
      setErrorMessage({
        error,
        message: "Error fetching certifications",
      });
      setSuccessMessage(null);
    },
    isSuccess: (res) => {
      setSuccessMessage("Successfully fetched certifications");
      setErrorMessage(null);
    },
    staleTime: Infinity,
  });

  return isLoading ? (
    <p>Loading...</p>
  ) : isError ? (
    <p>{error.message}</p>
  ) : certifications?.length === 0 ? (
    <div className="container-badge" id="badges">
      <p>No certifications found</p>
    </div>
  ) : (
    <div className="container-certifications" id="certifications">
      <h2 style={{ textAlign: "center" }}>Certifications</h2>
      <>
        {certifications?.map((certification, index) => (
          <CertificationCard
            key={`${certification.title}-${index}`}
            category={certification.category}
            title={certification.title}
            awarded_by={certification.awarded_by}
            awarded_date={certification.awarded_date}
            expiry_date={certification.expiration_date}
            certification_link={certification.certification_link}
            certification_number={certification.certification_number}
            image_url={certification.image_url}
            icon_url={certification.icon_url}
          />
        ))}
      </>
    </div>
  );
};

export default Certifications;
