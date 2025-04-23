import { useQuery } from "@tanstack/react-query";

import "./Badge.css";
import BadgeCard from "../../card/BadgeCard.jsx";
import { badges } from "./../data.js";
import { API_URL } from "../../../utils/constants.js";
import { Loader } from "lucide-react";

const Bagde = () => {
  const {
    data: badges,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["badges"],
    queryFn: async () => {
      return await fetch(`${API_URL}/badges`)
        .then((res) => res.json())
        .then((data) => data);
    },
    staleTime: Infinity,
  });
  return isLoading ? (
    <Loader />
  ) : isError ? (
    <p>{error.message}</p>
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
