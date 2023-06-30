import React from "react";
import "../stylesheets/SkillList.css";

import SkillListItem from "./SkillListItem";

export default function SkillList({ skills, setSkills }) {
    return (
        <div>
            <ul>
            {skills.map((s, index) => <SkillListItem key={index} skill={s} index={index} />)}
            </ul>
        </div>
    );
}