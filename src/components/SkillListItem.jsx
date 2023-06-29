import React from "react";
import "./SkillListItem.css"

export default function SkillListItem({ skill, id, index }) {
  return (
    <li 
      className="SkillListItem"
      key={id}
      style={{
        backgroundColor: index % 2 ? "lightblue" : "#61DAFB"
      }}
    >
        {skill}
    </li>);
}