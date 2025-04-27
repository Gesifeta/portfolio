import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { API_URL } from "../../../utils/constants";
import EducationCard from "../../card/EducationCard";

import "./Education.css";
const Education = () => {
  // Success message
  const [successMessage, setSuccessMessage] = useState(null);
  // Error message
  const [errorMessage, setErrorMessage] = useState({
    message: null,
    error: null,
  });
  // get education from API
  const {
    data: educations,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["educations"],
    queryFn: async () => {
      return await fetch(`${API_URL}/educations`)
        .then((res) => res.json())
        .then((data) => data);
    },
    onSucccess: () => {
      setSuccessMessage("Educations fetched successfully");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    },
    onError: (error) => {
      setErrorMessage({
        message: "Error fetching educations",
        error: error.message,
      });
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    },
    staleTime: Infinity,
  });
  console.log("Data-education", educations);
  return isLoading ? (
    <p>Loading...</p>
  ) : isError ? (
    <p>{error.message}</p>
  ) : (
    <div className="container-educations" id="educations">
      <h2 style={{ textAlign: "center" }}>Educations</h2>
      <div className="educations">
        {educations?.map((education, index) => (
          <EducationCard
            key={`${education.name_of_award}-${index}`}
            id={education.id}
            field_of_study={education.field_of_study}
            level={education.level}
            nameOfAward={education.name_of_award}
            institution={education.institution}
            city={education.city}
            country={education.country}
            startDate={education.start_year}
            endDate={education.end_year}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
