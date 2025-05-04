import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import "./Experiences.css";
import ExperienceCard from "../../card/ExperienceCard";
import { API_URL } from "../../../utils/constants.js";

function Experiences() {
  // success message
  const [successMessage, setSuccessMessage] = useState(null);
  // error message
  const [errorMessage, setErrorMessage] = useState({
    message: null,
    error: null,
  });
  // query
  const {
    data: experiences,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["experiences"],
    queryFn: async () => {
      return await fetch(`${API_URL}/experiences`).then((res) => res.json());
    },
    staleTime: Infinity,
    onSuccess: (data) => {
      setSuccessMessage(data.message);
    },
    onError: (error) => {
      setErrorMessage({
        message: error.message,
        error: error,
      });
    },
  });
  return isLoading ? (
    <p>Loading...</p>
  ) : isError ? (
    <p>{errorMessage.error}</p>
  ) : experiences?.length === 0 ? (
    <div className="container-badge" id="badges">
      <p>No experiences found</p>
    </div>
  ) : (
    <div className="experiences" id="experiences">
      <h2 style={{ textAlign: "center" }}>Experiences</h2>
      <div className="container-experiences">
        {experiences?.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company_name}-${index}`}
            company_name={experience.company_name}
            city={experience.city}
            country={experience.country}
            position={experience.position}
            start_year={new Date(experience.start_year).getFullYear()}
            end_year={new Date(experience.end_year).getFullYear()}
          />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
