import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

//import { projects } from "./../data.js";
import ProjectCard from "../../card/ProjectCard.jsx";
import { API_URL } from "../../../utils/constants.js";
const Projects = () => {
  // success message
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState({
    message: null,
    error: null,
  });
  // Filter projects to show. only show required projects
  const [filteredProjects, setFilteredProjects] = useState([]);
  const handleFilterProjects = () => {
    const filtered = projects?.filter((project) => project.show === "true");
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
  // get projects from the backend
  const {
    data: projects,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return await fetch(`${API_URL}/projects`).then((res) => res.json());
    },
    staleTime: Infinity,
    onSuccess: (data) => {
      handleFilterProjects();
      if (data?.message) {
        setSuccessMessage(data?.message);
      }
    },
    onError: (error) => {
      setErrorMessage({
        message: error?.message,
        error: error?.error,
      });
    },
  });
  return isLoading ? (
    <p>Loading...</p>
  ) : isError ? (
    <p>{error.message}</p>
  ) :projects?.length === 0 ? (
    <p>No projects found</p>
  ) : (
    <div id="projects" className="container-projects">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div className="projects">
        {isSuccess &&
          projects?.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              title={project.title}
              image={project.image_url}
              description={project.description}
              stacks={project.technologies}
              projectlink={project.live_url}
              projectdemo={project?.projectdemo}
            />
          ))}
        {/* TO show more projects */}
        <button
          className="btn-secondary"
          style={{
            backgroundColor: "var(--color-charcoal-gray)",
            width: "50%",
            display: "block",
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
