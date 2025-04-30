import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";

import "./Badge.css";
import BadgeCard from "../../card/BadgeCard.jsx";
import { API_URL } from "../../../utils/constants.js";
import { Loader } from "lucide-react";

const Bagde = () => {
  // Success message
  const [successMessage,setSuccessMessage]=useState(null);
  // Error message
  const [errorMessage,setErrorMessage]=useState({
    message: null,
    error: null
  });
  const {
    data: badges,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["badges"],
    queryFn: async () => {
      return await fetch(`${API_URL}/badges`)
        .then((res) => res.json())
        .then((data) => data);
    },
    onSucccess: () => {
      setSuccessMessage("Badges fetched successfully");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    },
    onError: (error) => {
      setErrorMessage({
        message: "Error fetching badges",
        error: error.message,
      });
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    },
    staleTime: Infinity,
  
  });
  return isLoading ? (
    <div className="container-badge" id="badges">
      <p>Loading...</p>
    </div>
  ) : isError ? (
    <p>{error.message}</p>
  ) : badges?.length === 0 ? (
    <div className="container-badge" id="badges">
      <p>No badges found</p>
    </div>
  ) : (
    <div className="container-badge" id="badges">
      <h2 style={{ textAlign: "center" }}>Badges</h2>
      <div className="badges">
        {badges?.map((badge, index) => (
          <BadgeCard
            key={`${badge.title}-${index}`}
            title={badge.title}
            description={badge.description}
            badgeLink={badge.badge_link}
            awardedBy={badge.awarded_by}
            skills={badge.skills}
            image={badge.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Bagde;
