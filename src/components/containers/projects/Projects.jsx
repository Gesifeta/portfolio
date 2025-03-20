import React, { useState } from "react";
import { projects } from "../../../data/project.";
import ProjectCard from "../../card/ProjectCard.jsx";
const Projects = () => {
  // Filter projects to show. only show required projects
  const [filteredProjects, setFilteredProjects] = useState([]);
  const handleFilterProjects = () => {
    const filtered = projects.filter((project) => project.show === "true");
    setFilteredProjects(filtered);
  };
  // TO SHOW ALL PROJECTS IF REQUIRED
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = (e) => {
    e.preventDefault();
    let actionType = e.target.textContent;
    if (actionType === "Show Less") {
      setShowAll(false);
      handleFilterProjects();
      return;
    }
    setShowAll(true);
    setFilteredProjects(projects);
  };
  // Filter projects when dom mounts
  React.useEffect(() => {
    handleFilterProjects();
  }, []);

  return (
    <div id="projects" className="container-projects">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div className="projects">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            title={project.title}
            image={project.image}
            description={project.description}
            stacks={project.stacks}
            projectlink={project.projectlink}
            projectdemo={project?.projectdemo}
          />
        ))}
        {/* TO show more projects */}
        <button
          className="btn-secondary"
          style={{
            backgroundColor: "var(--color-charcoal-gray)",
            width: "50%",
            margin: "auto",
          }}
          onClick={handleShowAll}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
