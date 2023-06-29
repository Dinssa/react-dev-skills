import React from "react";
import "../stylesheets/SkillListItem.css"

export default function SkillListItem({ skill, id, index }) {
  return (
    <li 
      className="SkillListItem"
      key={id}
    >
        {skill.name}
        <span className="SkillListItem-level">Level: {skill.level}</span>
    </li>);
}