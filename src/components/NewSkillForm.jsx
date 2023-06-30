import React from "react";
import "../stylesheets/NewSkillForm.css";
import { useState } from 'react';

export default function NewSkillForm({skills, setSkills}) {
  let defaults = { name: '', level: 1 };
  const [newSkill, setNewSkill] = useState(defaults);
  return (
    <form className="NewSkillForm">
      <div className="form-content">
        <div className="form-group">
          <label>Skill</label>
          <input 
          id="skillName"
          value={newSkill.name}
          onChange={(e) => {
            setNewSkill({
              ...newSkill,
              name: e.target.value
            });
          }}
          ></input>
        </div>
        <div className="form-group">
          <label>Level</label>
          <select
            id="skillLevel" 
            value={newSkill.level}
            onChange={(e) => {
              setNewSkill({
                ...newSkill,
                level: e.target.value
              });
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
                const name = newSkill.name.trim() === '' ? 'Undefined' : newSkill.name;
                const level = parseInt(newSkill.level);
                let skillParsed = { name, level };
                setSkills([...skills, skillParsed]);
                setNewSkill(defaults);
            }
        }>ADD SKILL</button>
      </div>
    </form>
  );
}
