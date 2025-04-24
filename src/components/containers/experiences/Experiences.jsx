import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import "./Experiences.css";
import ExperienceCard from "../../card/ExperienceCard";
import { API_URL } from "../../../utils/constants.js";

function Experiences() {
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
  });
  return isLoading ? (
    <p>Loading...</p>
  ) : isError ? (
    <p>{error.message}</p>
  ) : (
    <div className="experiences" id="experiences">
      <h2 style={{ textAlign: "center" }}>Experiences</h2>
      <div className="container-experiences">
        {experiences?.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company_name}-${index}`}
            companyName={experience.company_name}
            city={experience.city}
            country={experience.country}
            position={experience.position}
            responsibilities={experience.responsibilities}
            startDate={new Date(experience.start_year).getFullYear()}
            endDate={new Date(experience.end_year).getFullYear()}
          />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
