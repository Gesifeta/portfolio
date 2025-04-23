import React from "react";
import { useMutation } from "@tanstack/react-query";
import { replace, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { API_URL } from "../../../utils/constants";
import Upload from "../../upload/Upload";
import "./Education.css";

function NewEducation() {
  const navigate = useNavigate();
  // Get user from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  if (user === null) {
    return navigate("/login", { replace: true });
  }
  const [errorMessage, setErrorMessage] = React.useState({
    message: "",
    error: "",
  });
  const [successMessage, setSuccessMessage] = React.useState({
    message: "",
    error: "",
  });

  const [education, setEducation] = React.useState({
    user_id: user.id,
    institution: "",
    field_of_study: "",
    school_name: "",
    specialization: "",
    level: "",
    city: "",
    country: "",
    state:"",
    start_year: null,
    end_year: null,
    image_url: "",
  });
  const {
    mutateAsync: addEducation,
    isPending,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: async (data) => {
      return await fetch(`${API_URL}/educations/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    mutationKey: ["addEducation"],
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleEducationInput = (e) => {
    setEducation((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleEducationSubmit = async (e) => {
    e.preventDefault();
    setEducation((prevState) => {
      return { ...prevState, id: uuidv4() };
    });
    return await addEducation(education);
  };
  return (
    <div className="container-form">
      <fieldset>
        <legend>Add Education</legend>
        <form
          action=""
          onSubmit={handleEducationSubmit}
          style={{ display: "flex", flexDirection: "row" }}
        >
          {/* user id  */}
          <div>
            <div className="form-group">
              <label htmlFor="user_id">User ID</label>
              <input
                type="text"
                name="user_id"
                disabled
                value={education.user_id}
                onChange={handleEducationInput}
                id="user_id"
                placeholder="Enter user id"
              />
            </div>
            {/* institution */}
            <div className="form-group">
              <label htmlFor="institution">College/University</label>
              <input
                type="text"
                name="institution"
                value={education.institution}
                onChange={handleEducationInput}
                id="institution"
                placeholder="Enter institution"
              />
            </div>
            <div className="form-group">
              <label htmlFor="field_of_study">Field of Study</label>
              <input
                type="text"
                name="field_of_study"
                value={education.field_of_study}
                onChange={handleEducationInput}
                id="field_of_study"
                placeholder="Enter field of study"
              />
            </div>
            <div className="form-group">
              <label htmlFor="school_name">School/Faculty</label>
              <input
                type="text"
                name="school_name"
                value={education.school_name}
                onChange={handleEducationInput}
                id="school_name"
                placeholder="Enter school_name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="specialization">Specialization</label>
              <input
                type="text"
                name="specialization"
                value={education.specialization}
                onChange={handleEducationInput}
                id="specialization"
                placeholder="Enter specialization"
              />
            </div>
            {/* Level */}
            <div className="form-group">
              <label htmlFor="level">Level</label>
              <select
                name="level"
                id="level"
                onChange={handleEducationInput}
                value={education.level}
              >
                <option value="select">select</option>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
                <option value="phd">PhD</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* name of award */}
            <div className="form-group">
              <label htmlFor="name_of_award">Name of Award</label>
              <input
                type="text"
                name="name_of_award"
                value={education.name_of_award}
                onChange={handleEducationInput}
                id="name_of_award"
                placeholder="Enter name of award"
              />
            </div>
            {/* Grade */}
            <div className="form-group">
              <label htmlFor="grade">Grade</label>
              <input
                type="text"
                name="grade"
                value={education.grade}
                onChange={handleEducationInput}
                id="grade"
                placeholder="Enter grade"
              />
            </div>{" "}
            {/* Awards */}
            <div className="form-group">
              <label htmlFor="awards">Awards</label>
              <input
                type="text"
                name="awards"
                value={education.awards}
                onChange={handleEducationInput}
                id="awards"
                placeholder="Enter awards"
              />
            </div>
            <div className="form-group">
              <label htmlFor="start_date">Start Date</label>
              <input
                type="date"
                name="start_date"
                onChange={handleEducationInput}
                id="start_date"
                placeholder="Enter start date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="end_date">End Date</label>
              <input
                type="date"
                name="end_date"
                onChange={handleEducationInput}
                id="end_date"
                placeholder="Enter end date"
              />
            </div>
          </div>
          <div>
            {/* Addresses */}
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={education.city}
                onChange={handleEducationInput}
                id="city"
                placeholder="Enter city"
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                name="state"
                value={education.state}
                onChange={handleEducationInput}
                id="state"
                placeholder="Enter state"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                value={education.country}
                onChange={handleEducationInput}
                id="country"
                placeholder="Enter country"
              />
            </div>
            <Upload />
            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default NewEducation;
