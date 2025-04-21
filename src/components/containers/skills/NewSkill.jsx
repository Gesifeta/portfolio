import React from "react";
import Upload from "../../upload/Upload";

const NewSkill = () => {
  return (
    <div className="container-form">
      <fieldset>
        <legend>New Skill</legend>
        <form action="">
          {/* user id */}
          <div className="form-group">
            <label htmlFor="user_id">User Id</label>
            <input type="text" name="user_id" id="user_id" />
          </div>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="level">Category</label>
            <select name="category" id="category">
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="devops">Devops</option>
              <option value="ux">UI/UX</option>
              <option value="security">Security</option>
              <option value="softskill">Soft Skill</option>
              <option value="ai">AI</option>
              <option value="iot">Testing</option>
              <option value="tools">Tools</option>
              <option value="database">Database</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* description  */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <Upload />
      </fieldset>
    </div>
  );
};

export default NewSkill;
