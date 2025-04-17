import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

import "./projects.css";
import { API_URL } from "../../../utils/constants";
import { Minus, Plus } from "lucide-react";

const NewProjectRegister = () => {
  const { data: skills, isLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      console.log("fetched");
      return await fetch(`${API_URL}/skills`).then((res) => res.json());
    },
    staleTime: Infinity,
  });
  // To store query string
  const [query, setQuery] = useState("");
  // To store the selected skills
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  // A function to handle query inputs
  function handleQueryInput(e) {
    const { value } = e.target;
    setQuery(value);
  }
  useEffect(() => {
    setSelectedSkills(
      skills?.filter((skill) =>
        skill.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.technologies = technologies;
  // send data to server
    fetch(`${API_URL}/projects/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container-form">
      <h1>Register Project</h1>
      <form className="registration-form">
        <div className="form-group">
          <label htmlFor="title">Project Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter project title"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectDescription">Project Description</label>
          <textarea
            className="form-control"
            id="projectDescription"
            placeholder="Enter project description"
            name="description"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
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
                      setTechnologies(technologies.filter((id) => id !== tag));
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
            {query && (
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
                          <Plus />
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectImage">Project Image</label>
          <input type="file" className="form-control-file" id="projectImage" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewProjectRegister;
