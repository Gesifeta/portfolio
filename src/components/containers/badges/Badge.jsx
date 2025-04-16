
import "./Badge.css"
import BadgeCard from "../../card/BadgeCard.jsx";
import { badges } from './../data.js'

const Bagde = () => {
  console.log(badges);
  return (
    <div className="container-badge" id="badges">
      <h2 style={{textAlign:"center"}}>Badges</h2>
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
    </div>
  );
};

export default Bagde;
