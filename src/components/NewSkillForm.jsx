import React from "react";
import "../stylesheets/NewSkillForm.css";

export default function NewSkillForm({skills, setSkills}) {
  let newSkill = {};
  return (
    <form className="NewSkillForm">
      <div className="form-content">
        <div className="form-group">
          <label>Skill</label>
          <input 
          value={newSkill.name}
          onChange={(e) => {
              newSkill.name = e.target.value;
          }}
          ></input>
        </div>
        <div className="form-group">
          <label>Level</label>
          <select 
            value={newSkill.level}
            onChange={(e) => {
                newSkill.level = e.target.value;
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button onClick={
            (e) => {
                e.preventDefault();
                setSkills([...skills, newSkill]);
            }
        }>ADD SKILL</button>
      </div>
    </form>
  );
}
