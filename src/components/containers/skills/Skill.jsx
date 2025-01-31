import React, { useEffect, useState } from "react";

import "./Skill.css";
import { skills } from "../../../data/skill.js";

const Skill = () => {
  const [filteredSkills, setFilteredSkills] = useState([]);
  // Show all skills by default
  useEffect(() => {
    setFilteredSkills(skills);
  }, []);
  // Filter skills
  const filterSkill = (e) => {
    e.preventDefault();
    const skillCategory = e.target.innerText.toLowerCase();
    const filteredSkills = skills.filter((skill) => {
      return skill.category === skillCategory;
    });
    setFilteredSkills(filteredSkills);
  };

  // To add vertical connector to the skills
  // connects category to the respective skills
  const showSkills = (e) => {
    let target = e.target;
    e.preventDefault();
    const skillCategory = document.querySelectorAll(".category");
    skillCategory.forEach((category) => {
      category.lastElementChild.classList.remove("animate-connector");
      category.lastElementChild.classList.remove("vertical-connector");
    });
    target.lastElementChild.classList.add("animate-connector");
    target.lastElementChild.classList.add("vertical-connector");

    if (target.innerText.toLowerCase() === "all") {
      setFilteredSkills(skills);
    } else {
      filterSkill(e);
    }
  };
  return (
    <>
      {/* Skill categories */}
      <section className="container-skills" id="skills">
        <h2>Skills</h2>
        <div className="skill-category" onClick={showSkills}>
          <span className="category">
            All <span className="vertical-connector"></span>
          </span>
          <span className="category">
            Frontend <span></span>
          </span>
          <span className="category">
            Backend <span></span>
          </span>
          <span className="category">
            Cloud <span></span>
          </span>
          <span className="category">
            Design <span></span>
          </span>
        </div>
        <div className="skills">
          {filteredSkills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-name">{skill.name}</div>
              {skill.name === "AWS" ? (
                <div className="skillSets">
                  {skill.skillSets.map((skillSet, index) => (
                    <span
                      className="skillSet-name"
                      key={`${skillSet.name}-${index}`}
                    >
                      {skillSet.name}
                    </span>
                  ))}
                </div>
              ) : null}
              <div className="skill-level">
                <div
                  className="skill-level-bar"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skill;
