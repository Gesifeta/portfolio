import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

import "./Experiences.css";
import Upload from "../../upload/Upload";
import { API_URL } from "../../../utils/constants.js";
import { Loader } from "lucide-react";

const NewExperience = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return navigate("/login");
  }
  const [errorMessage, setErrorMessage] = React.useState({
    message: "",
    error: "",
  });
  const [succussMessage, setSuccessMessage] = React.useState({
    message: "",
    data: "",
  });

  const [experience, setExperience] = React.useState({
    id: uuidv4(),
    user_id: user.id,
    company_name: "",
    position: "",
    city: "",
    state: "",
    country: "",
    start_year: "",
    end_year: null,
    image_url: "",
  });
  const handleExperienceInput = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const {
    mutateAsync: addExperience,
    isPending,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: async (data) => {
      return await fetch(`${API_URL}/experiences/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    mutationKey: ["addExperience"],
    onSuccess: (res) => {
      setSuccessMessage({
        message: "Experience added successfully",
        data: res,
      });
      console.log(experience);
    },
    onError: (error) => {
      setErrorMessage({
        message: "Error adding experience",
        error: error.message,
      });
    },
    onSettled: () => {
      setExperience({
        id: uuidv4(),
        user_id: user.id,
        company_name: "",
        position: "",
        city: "",
        state: "",
        country: "",
        start_year: "",
        end_year: null,
        image_url: "",
      });
    },

  });
  return (
    <div className="container-form">
      <fieldset>
        <legend>New Experience</legend>
        <form
          method="post"
          onSubmit={async (e) => {
            e.preventDefault();
            await addExperience(experience);
          }}
        >
          <div className="form-group">
            <label htmlFor="user_id">User ID</label>
            <input
              type="text"
              name="user_id"
              id="user_id"
              value={experience.user_id}
              disabled
              onChange={handleExperienceInput}
              placeholder="Enter user id"
            />
          </div>
          <div className="form-group">
            {/* user id */}
            <label htmlFor="company_name">Company</label>
            <input
              type="text"
              name="company_name"
              id="company_name"
              value={experience.company_name}
              onChange={handleExperienceInput}
              placeholder="Enter company name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              id="position"
              value={experience.position}
              onChange={handleExperienceInput}
              placeholder="Enter position"
            />
          </div>
          {/* company address */}
          <div className="form-gropu">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              value={experience.city}
              onChange={handleExperienceInput}
              id="city"
              placeholder="Enter company city"
            />
          </div>
          {/* state */}
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              value={experience.state}
              onChange={handleExperienceInput}
              id="state"
              placeholder="Enter state"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              value={experience.country}
              onChange={handleExperienceInput}
              id="country"
              placeholder="Enter country"
            />
          </div>

          <div className="form-group">
            <label htmlFor="start_year">Start Date</label>
            <input
              type="date"
              name="start_year"
              value={experience.start_date}
              onChange={handleExperienceInput}
              id="start_year"
              pattern="\d{4}-\d{2}-\d{2}"
              placeholder="Enter start date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="end_year">End Date</label>
            <input
              type="date"
              name="end_year"
              value={experience.end_date}
              pattern="\d{4}-\d{2}-\d{2}"
              onChange={handleExperienceInput}
              id="end_year"
              placeholder="Enter end date"
            />
          </div>
          {/* image url */}
          <div className="form-group">
            <label htmlFor="image_url">Image URL</label>
            <input
              type="text"
              name="image_url"
              value={experience.image_url}
              onChange={handleExperienceInput}
              disabled
              id="image_url"
              placeholder="Enter image url"
            />
          </div>
          {isError && (
            <div className="error-message">
              <p style={{color:"red"}}>{errorMessage.message}</p>
              <p style={{color:"red"}}>{errorMessage.error}</p>
            </div>
          )}
          {isSuccess && (
            <div className="success-message">
              <p>{succussMessage.message}</p>
            </div>
          )}
          <div className="btn-group">
            <button type="submit" className="btn btn-primary">
              {isPending ? (
                <span>
                  {" "}
                  Submitting <Loader />{" "}
                </span>
              ) : (
                "Submit"
              )}
            </button>
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </div>
        </form>
        <Upload data={experience} setData={setExperience} />
      </fieldset>
    </div>
  );
};

export default NewExperience;
