import React from "react";

import SkillListItem from "./SkillListItem";

export default function SkillList({ skills }) {
    return (
        <ul>
        {skills.map(s => <SkillListItem skill={s} />)}
        </ul>
    );
}