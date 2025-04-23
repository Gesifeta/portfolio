import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { API_URL } from "../../../utils/constants.js";
import SkillCard from "../../card/SkillCard.jsx";

import "./Skill.css";
const Skill = () => {
  const [filteredSkills, setFilteredSkills] = useState([]);

  // Filter skills
  const filterSkill = (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.innerText.toLowerCase() === "all") {
      setFilteredSkills(skills);
      return;
    }
    const skillCategory = target.innerText.toLowerCase();
    const filteredSkills = skills?.filter((skill) => {
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
  const {
    data: skills,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      return await fetch(`${API_URL}/skills`).then((res) => res.json());
    },
    staleTime: Infinity,
  });
  useEffect(() => {
    setFilteredSkills(skills);
  }, [isSuccess]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  isError && console.log(error);
  return (
    <div className="container-skills" id="skills">
      <h2 style={{ textAlign: "center" }}>Skills</h2>
      <div className="skill-category" onClick={showSkills}>
        {[
          "All",
          "Frontend",
          "Backend",
          "Devops",
          "UI/UX",
          "Tools",
          "Database",
          "Testing",
          "Soft Skills",
          "Security",
        ].map((category, index) => (
          <span className="category" key={`${category}-${index}`}>
            {category}
            <span className="connector"></span>
          </span>
        ))}
      </div>
      <div className="skills">
        {filteredSkills?.map((skill, index) => (
          <SkillCard
            key={`${skill.name}-${index}`}
            name={skill.name}
            skillSets={skill.skillSets?.length > 0 && skill.skillSets}
            ic
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
