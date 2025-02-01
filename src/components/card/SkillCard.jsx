import "./SkillCard.css";
const SkillCard = ({ name, skillSets }) => {
  return (
    <div className="skill">
      <span className="skill-name">{name}</span>
      {skillSets?.length > 0 ? (
        <div className="skillSets">
          {skillSets.map((skillSet, index) => (
            <span className="skillSet-name" key={`${skillSet.name}-${index}`}>
              {skillSet.name}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};
export default SkillCard;
