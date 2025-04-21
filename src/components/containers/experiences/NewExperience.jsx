import React from "react";
import Upload from "../../upload/Upload";

const NewExperience = () => {
  return (
    <div className="container-form">
      <fieldset>
        <legend>New Experience</legend>
        <form action="">
          <div className="form-group">
            <label htmlFor="user_id">User ID</label>
            <input
              type="text"
              name="user_id"
              id="user_id"
              disabled
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
              placeholder="Enter company name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              id="position"
              placeholder="Enter position"
            />
          </div>
          {/* company address */}
          <div className="form-gropu">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
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
              id="state"
              placeholder="Enter state"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Enter country"
            />
          </div>

          <div className="form-group">
            <label htmlFor="start_date">Start Date</label>
            <input
              type="date"
              name="start_date"
              id="start_date"
              placeholder="Enter start date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="end_date">End Date</label>
            <input
              type="date"
              name="end_date"
              id="end_date"
              placeholder="Enter end date"
            />
          </div>
          {/* image url */}
          <div className="form-group">
            <label htmlFor="image_url">Image URL</label>
            <input
              type="text"
              name="image_url"
              disabled
              id="image_url"
              placeholder="Enter image url"
            />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </div>
        </form>
        <Upload />
      </fieldset>
    </div>
  );
};

export default NewExperience;
