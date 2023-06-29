import logo from './logo.svg';
import './App.css';
import SkillList from './components/SkillList';
import NewSkillForm from './components/NewSkillForm';
import {skills as skillsDB} from './db';
import { useState } from 'react';

function App() {
  const [skills, setSkills] = useState(skillsDB);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>React Dev Skills</h5>
      </header>
      <main>
        <SkillList skills={skills} />
        <NewSkillForm />
      </main>
    </div>
  );
}

export default App;
