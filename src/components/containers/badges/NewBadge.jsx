import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../utils/constants";
import { v4 as uuidv4 } from "uuid";
import { replace, useNavigate } from "react-router-dom";

import Upload from "../../upload/Upload";
const NewBadge = () => {
  const navigate = useNavigate();
  // success message
  const [successMessage, setSuccessMessage] = useState(false);
  //error message
  const [errorMessage, setErrorMessage] = useState({
    error: "",
    message: "",
  });
  // get user from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return navigate("/login", { replace: true });
  }
  // To store the skill data
  const [skill, setSkill] = useState({
    id: "",
    user_id: user.id,
    title: "",
    awarded_by: "",
    awarded_date: "",
    badge_number: "",
    badge_link: "",
    description: "",
    skills: [],
    image_url: "",
  });
  // Mutation
  const {
    mutateAsync: addBadge,
    isError,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (data) => {
      return await fetch(`${API_URL}/badges/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: (data) => {
      if (data.status === 200) {
        setSuccessMessage("Badge successfuly added.");
        
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
      }
    },
    onError: (error) => {
      setErrorMessage({
        error: true,
        message: error.message,
      });
      setTimeout(() => {
        setErrorMessage({
          error: false,
          message: "",
        });
      }, 3000);
    },
  });
  // A function to handle skill inputs
  function handleSkillInput(e) {
    const { name, value } = e.target;
    setSkill((prev) => ({
      ...prev,
      [name]:
        name === "skills"
          ? value.split(",").map((skill) => skill.trim())
          : value,
      id: uuidv4(),
    }));
  }
  // A function to handle skill submit
  async function handleSkillSubmit(e) {
    e.preventDefault();
    return await addBadge(skill)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container-form">
      {/* Badges */}

      <fieldset>
        <legend>New Badge</legend>
        <form action="" method="post" onSubmit={handleSkillSubmit}>
          {/* user id */}
          <div className="form-group">
            <label htmlFor="user_id">User ID</label>
            <input
              type="text"
              name="user_id"
              value={skill.user_id}
              disabled
              id="user_id"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={skill.title}
              onChange={handleSkillInput}
              id="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="awarded_by">Awarded By</label>
            <input
              type="text"
              name="awarded_by"
              id="awarded_by"
              value={skill.awarded_by}
              onChange={handleSkillInput}
            />
          </div>
          {/* Awarded date */}
          <div className="form-group">
            <label htmlFor="awarded_date">Awarded Date</label>
            <input
              type="date"
              value={skill.awarded_date}
              onChange={handleSkillInput}
              name="awarded_date"
              id="awarded_date"
            />
          </div>
          {/* Badge number */}
          <div className="form-group">
            <label htmlFor="badge_number">Badge Number</label>
            <input
              type="text"
              name="badge_number"
              id="badge_number"
              value={skill.badge_number}
              onChange={handleSkillInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="badge_link">Badge Link</label>
            <input
              type="text"
              name="badge_link"
              value={skill.badge_link}
              onChange={handleSkillInput}
              id="badge_link"
            />
          </div>{" "}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={skill.description}
              onChange={handleSkillInput}
              cols="30"
              rows="5"
              placeholder="Enter description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="skills">Skills</label>
            <textarea
              type="text"
              name="skills"
              value={skill.skills}
              onChange={handleSkillInput}
              id="skills"
              placeholder="Enter skills comma separated"
              cols="30"
              rows="5"
            />
          </div>
          {/* image url */}
          <div className="form-group">
            <label htmlFor="image_url">Image URL</label>
            <input
              type="text"
              name="image_url"
              id="image_url"
              value={skill.image_url}
              disabled
            />
          </div>
          {/* success and error messages */}
          {isError && (
            <div className="error-message">
              <p style={{ color: "red" }}>{errorMessage?.message}</p>
              <p style={{ color: "red" }}>{errorMessage?.error}</p>
            </div>
          )}
          {isSuccess && (
            <div className="success-message">
              <p>{successMessage}</p>
            </div>
          )}
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
        <Upload data={skill} setData={setSkill} />
      </fieldset>
    </div>
  );
};

export default NewBadge;
