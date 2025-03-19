import  { useEffect, useState } from "react";


import SkillCard from "../../card/SkillCard.jsx";
import { skills } from "../../../data/skill.js";
import "./Skill.css"
const Skill = () => {
  const [filteredSkills, setFilteredSkills] = useState([]);
  // Show all skills by default
  useEffect(() => {
    setFilteredSkills(skills);
  }, []);
  // Filter skills
  const filterSkill = (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.innerText.toLowerCase() === "all") {
      setFilteredSkills(skills);
      return;
    }
    const skillCategory = target.innerText.toLowerCase();
    const filteredSkills = skills.filter((skill) => {
      return skill.category.toLowerCase() === skillCategory;
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
    filterSkill(e);
  };
  return (
    <div className="container-skills" id="skills">
      <h2 style={{ textAlign: "center" }}>Skills</h2>
      <div className="skill-category" onClick={showSkills}>
        {["All", "Frontend", "Backend", "Cloud Computing", "UX Design"].map(
          (category, index) => (
            <span className="category" key={`${category}-${index}`}>
              {category}
              <span className="connector"></span>
            </span>
          )
        )}
      </div>
      <div className="skills">
        {filteredSkills.map((skill, index) => (
          <SkillCard
            key={`${skill.name}-${index}`}
            name={skill.name}
            skillSets={skill.skillSets.length > 0 && skill.skillSets}
            ic
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
