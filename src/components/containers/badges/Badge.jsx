
import "./Badge.css"
import BadgeCard from "../../card/BadgeCard.jsx";
import { badges } from "../../../data/badges.js";

const Bagde = () => {
  console.log(badges);
  return (
    <section className="container-badge">
      <h2>Badges</h2>
      <div className="badges">
        {badges.map((badge, index) => (
          <BadgeCard
            key={`${badge.title}-${index}`}
            title={badge.title}
            description={badge.description}
            badgeLink={badge.badgeLink}
            awardedBy={badge.awardedBy}
            skills={badge.skills}
            image={badge.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Bagde;
