import React from "react";
import "./SkillListItem.css"

export default function SkillListItem({ skill, id }) {
  return <li className="SkillListItem" key={id}>{skill}</li>;
}