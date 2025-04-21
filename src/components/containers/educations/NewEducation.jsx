import React from "react";
import Upload from "../../upload/Upload";
import "./Education.css";

function NewEducation() {
  return (
    <div className="container-form">
      <fieldset>
        <legend>Add Education</legend>
        <form action="" style={{ display: "flex",flexDirection:"row" }}>
          {/* user id  */}
          <div>
            <div className="form-group">
              <label htmlFor="user_id">User ID</label>
              <input
                type="text"
                name="user_id"
                id="user_id"
                placeholder="Enter user id"
              />
            </div>
            {/* institution */}
            <div className="form-group">
              <label htmlFor="instititution">College/University</label>
              <input
                type="text"
                name="instititution"
                id="instititution"
                placeholder="Enter institution"
              />
            </div>
            <div className="form-group">
              <label htmlFor="field_of_study">Field of Study</label>
              <input
                type="text"
                name="field_of_study"
                id="field_of_study"
                placeholder="Enter field of study"
              />
            </div>
            <div className="form-group">
              <label htmlFor="school">School/Faculty</label>
              <input
                type="text"
                name="school"
                id="school"
                placeholder="Enter school"
              />
            </div>
            <div className="form-group">
              <label htmlFor="specialization">Specialization</label>
              <input
                type="text"
                name="specialization"
                id="specialization"
                placeholder="Enter specialization"
              />
            </div>
            {/* Level */}
            <div className="form-group">
              <label htmlFor="level">Level</label>
              <select name="level" id="level">
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
                id="grade"
                placeholder="Enter grade"
              />
            </div> {/* Awards */}
            <div className="form-group">
              <label htmlFor="awards">Awards</label>
              <input
                type="text"
                name="awards"
                id="awards"
                placeholder="Enter awards"
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
          </div>
          <div>
           
            {/* Addresses */}
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter city"
              />
            </div>
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
            <Upload /><div className="btn-group">
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
