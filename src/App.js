import logo from './logo.svg';
import './App.css';
import SkillList from './jsx/SkillList';
import NewSkillForm from './jsx/NewSkillForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>React Dev Skills</h5>
      </header>
      <main>
        <SkillList />
        <NewSkillForm />
      </main>
    </div>
  );
}

export default App;
