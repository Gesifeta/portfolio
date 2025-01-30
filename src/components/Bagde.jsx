import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import "./badges.scss"
const badgeCard = ({

  images,
  awardedBy,
  title,
  badgeLink,
  description,
  skills,
}) => {
  return (
    <section className="app__badge-card">
      <div>
        <div className="app__badgecard-image">
          <img src={images} alt="" />
        </div>
        <div className="app__badgecard-title">
          <div className="title"> {title}</div>
        </div>
        <p className="app__badgecard-campany--name">
          {awardedBy}
        </p>
      </div>
      <div className="app__badgecard badge">
        <p className="title">Description</p>
        <p className="description">
          {description}
        </p>
        <div>
          <p className="badge title">Skills</p>
          <div className="app__card-stacks badges">
            {skills.map((skill) => (
              <span key={skill} >{skill}</span>
            ))}
          </div>
        </div>
        <Link to={badgeLink} target="_blank">Verify Badge <FaArrowUpRightFromSquare /></Link>
      </div>
    </section>
  );
};

export default badgeCard;
