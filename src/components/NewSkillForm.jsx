import React from "react";
import "../stylesheets/NewSkillForm.css";

export default function NewSkillForm() {
  return (
    <form className="NewSkillForm">
      <div className="form-content">
        <div className="form-group">
          <label>Skill</label>
          <input></input>
        </div>
        <div className="form-group">
          <label>Level</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <button>ADD SKILL</button>
      </div>
    </form>
  );
}
