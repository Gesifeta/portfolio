import { IMAGE_URL } from "../../utils/constants";
import "./ProjectCard.css";

const ProjectCard = ({
  image,
  title,
  description,
  stacks,
  projectlink,
  projectdemo,
}) => {
  return (
    <div className="project">
      <div className="project-container">
        <div className="card">
          <div className="container-image">
            <img src={`${IMAGE_URL}/${image}`} alt={`${title}`} />
          </div>
          <div className="card-detail">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
          </div>
          <div className="card-stack">
            <p style={{ color: "greenyellow" }}>Tech-stacks</p>
            <ul className="stack">
              {stacks.map((stack, index) => (
                <li key={index}>{stack.toLowerCase()}</li>
              ))}
            </ul>
          </div>
          <div className="card-links">
            <a href={projectlink} target="_blank" rel="noopener noreferrer">
              <button className="btn">view</button>
            </a>
            <a href={projectdemo} target="_blank" rel="noopener noreferrer">
              <button className="btn">Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
