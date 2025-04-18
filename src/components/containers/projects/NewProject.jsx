import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

import "./projects.css";
import { API_URL } from "../../../utils/constants.js";
import { Minus, Plus } from "lucide-react";
import Upload from "../../upload/Upload.jsx";

const NewProjectRegister = () => {
  // To store query string
  const [queryString, setQuery] = useState("");
  // To store the selected skills
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  // To store the project data
  const [project, setProject] = useState({
    id: uuidv4(),
    user_id: "38b3f318-d233-4985-b294-c1423f772853",
    title: "",
    description: "",
    category: "",
    technologies,
    github_url: "",
    live_url: "",
    image_url: "",
  });
  // query
  const { data: skills, isLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      return await fetch(`${API_URL}/skills`).then((res) => res.json());
    },
    staleTime: Infinity,
  });
  // Mutation
  const { mutateAsync: addProject } = useMutation({
    mutationFn: async (data) => {
      console.log(data);
      return await fetch(`${API_URL}/projects/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: (data) => {
      console.log(data);
    },
  });

  // A function to handle query inputs
  function handleQueryInput(e) {
    const { value } = e.target;
    setQuery(value);
  }
  useEffect(() => {
    setSelectedSkills(
      skills?.filter((skill) =>
        skill.name.toLowerCase().includes(queryString.toLowerCase())
      )
    );
    setProject((prev) => ({
      ...prev,
      technologies: technologies,
    }));
  }, [queryString]);
  // A function to handle project inputs
  function handleProjectInput(e) {
    const { name, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: value,
      technologies: technologies,
    }));
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container-form">
      <h1>Register Project</h1>
      <form
        className="registration-form"
        method="post"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await addProject(project)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.log(error);
              });
          } catch (error) {}
        }}
      >
        <div className="form-group">
          <label htmlFor="title">Project Title</label>
          <input
            type="text"
            name="title"
            value={project.title}
            placeholder="Enter project title"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            onChange={handleProjectInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectDescription">Project Description</label>
          <textarea
            className="form-control"
            id="projectDescription"
            placeholder="Enter project description"
            name="description"
            value={project.description}
            rows="3"
            onChange={handleProjectInput}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            onChange={handleProjectInput}
            value={project.category}
          >
            <option value="select">select</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="devops">Devops</option>
            <option value="ai">AI</option>
            <option value="iot">Testing</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tags">Technology stacks</label>
          <div className="container-technology-stack">
            <div className="container-selected-tag">
              {technologies?.map((tag) => (
                <div key={tag} className="tag">
                  <span>{tag}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setProject(technologies.filter((id) => id !== tag));
                    }}
                  >
                    <Minus size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="technology_stack">
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                name="tags"
                id="tags"
                placeholder="Enter tags"
                onChange={handleQueryInput}
              />
            </div>
            {queryString && (
              <div className="container-technology-stack-filter">
                {selectedSkills?.length > 0 && (
                  <div className="container-selected-tag filter">
                    {selectedSkills?.map((skill) => (
                      <div key={skill.id} className="tag">
                        <span>{skill.name}</span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedSkills(
                              selectedSkills.filter((name) => name !== skill)
                            );
                            setTechnologies([...technologies, skill.name]);
                          }}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="live_url">Project Link</label>
          <input
            type="text"
            className="form-control"
            id="live_url"
            name="live_url"
            placeholder="Enter project link"
            value={project.live_url}
            onChange={handleProjectInput}
          />
        </div>
        {/* Github link  */}
        <div className="form-group">
          <label htmlFor="github_url">Github Link</label>
          <input
            type="text"
            className="form-control"
            id="github_url"
            name="github_url"
            placeholder="Enter github link"
            value={project.github_url}
            onChange={handleProjectInput}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Upload />
    </div>
  );
};

export default NewProjectRegister;
