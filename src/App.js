import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './composant/composant.js';
import FunctionalComponent from './composant/class.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FunctionalComponent variables/>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
