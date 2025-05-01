import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

import { API_URL } from "../../../utils/constants";
import Upload from "../../upload/Upload";
import ErrorMessage from "../../../components/error/ErrorMessage";

const NewCertification = () => {
  const navigate = useNavigate();
  // Get user from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return (
      <ErrorMessage message="You are not logged in" error="Unauthorized" />
    );
  }
  // SUCCESS MESSAGE
  const [successMessage, setSuccessMessage] = useState(null);
  // ERROR MESSAGE
  const [errorMessage, setErrorMessage] = useState({
    message: null,
    error: null,
  });
  const [certifications, setCertifications] = useState({
    user_id: user?.id,
    title: "",
    description: "",
    category: "",
    awarded_by: "",
    certification_number: "",
    certification_link: "",
    awarded_date: "",
    expiration_date: "",
    image_url: "",
    icon_url: "",
  });
  const handleCertificationInput = (e) => {
    setCertifications((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleCertificationSubmit = async (e) => {
    e.preventDefault();
    setCertifications((prevState) => {
      return { ...prevState, id: uuidv4() };
    });
    return await addCertification(certifications);
  };

  const {
    mutateAsync: addCertification,
    isSuccess,
    isError,
    error,
    isPending,
  } = useMutation({
    mutationFn: async (data) => {
  
      return await fetch(`${API_URL}/certifications/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()).then(d=>console.log(d));
    },
    mutationKey: ["addCertification"],
    onSuccess: (data) => {
      if (data.status === 200) {
        setSuccessMessage("Certification added successfully");
        setCertifications({
          id: "",
          user_id: user?.id,
          title: "",
          category: "",
          description: "",
          awarded_by: "",
          certification_number: "",
          certification_link: "",
          awarded_date: "",
          expiration_date: "",
          image_url: "",
          icon_url: "",
        });
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      }
    },
    onError: (error) => {
      setErrorMessage({
        message: error.message,
        error: error.error,
      });
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    },
  });

  return (
    <div className="container-form">
      {error && <ErrorMessage error={error} />}
      <fieldset>
        <legend>New Certification</legend>
        <form action="" method="post" onSubmit={handleCertificationSubmit}>
          {/* user id */}
          <div className="form-group">
            <label htmlFor="user_id">User ID</label>
            <input
              type="text"
              name="user_id"
              disabled
              id="user_id"
              value={certifications.user_id}
              onChange={handleCertificationInput}
              placeholder="Enter user id"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Certification Title</label>
            <input
              type="text"
              name="title"
              value={certifications.title}
              onChange={handleCertificationInput}
              id="title"
              placeholder="Enter certification name"
            />
          </div>
          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              value={certifications.description}
              onChange={handleCertificationInput}
              cols={30}
              rows={5}
              id="description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              onChange={handleCertificationInput}
              value={certifications.category}
            >
              <option value="select">select</option>
              <option value="frontend">Frontend</option>
              <option value="ui/ux">UI/UX</option>
              <option value="backend">Backend</option>
              <option value="devops">Devops</option>
              <option value="ai">AI</option>
              <option value="iot">Testing</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="awarded_by">Awarded by</label>
            <input
              type="text"
              name="awarded_by"
              value={certifications.awarded_by}
              onChange={handleCertificationInput}
              id="awarded_by"
              placeholder="Enter awarded_by"
            />
          </div>
          <div className="form-group">
            <label htmlFor="certification_number">Certification number</label>
            <input
              type="text"
              name="certification_number"
              value={certifications.certification_number}
              onChange={handleCertificationInput}
              id="certification_number"
              placeholder="Enter certification number"
            />
          </div>{" "}
          <div className="form-group">
            <label htmlFor="certification_link">Certification Link</label>
            <input
              type="text"
              name="certification_link"
              value={certifications.certification_link}
              onChange={handleCertificationInput}
              id="certification_link"
              placeholder="Enter certification link"
            />
          </div>
          <div className="form-group">
            <label htmlFor="awarded_date">awarded_date</label>
            <input
              type="date"
              name="awarded_date"
              value={certifications.awarded_date}
              onChange={handleCertificationInput}
              id="awarded_date"
              placeholder="Enter Awarded date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiration_date">Expiration Date</label>
            <input
              type="date"
              name="expiration_date"
              value={certifications.expiration_date}
              onChange={handleCertificationInput}
              id="expiration_date"
              placeholder="Enter Expiration date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image_url">Image URL</label>
            <input
              type="text"
              name="image_url"
              value={certifications.image_url}
              id="image_url"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="icon_url">Icon URL</label>
            <input
              type="text"
              name="icon_url"
              value=""
              disabled
              onChange={handleCertificationInput}
              id="icon_url"
            />
          </div>
          {error && (
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
        <Upload data={certifications} setData={setCertifications} />
      </fieldset>
    </div>
  );
};

export default NewCertification;
