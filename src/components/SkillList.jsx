import React from "react";
import "./SkillList.css";

import SkillListItem from "./SkillListItem";

export default function SkillList({ skills }) {
    return (
        <ul>
        {skills.map((s, index) => <SkillListItem key={index} skill={s} />)}
        </ul>
    );
}