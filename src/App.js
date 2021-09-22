import {BrowserRouter, Route} from "react-router-dom"
import About from "./About"
import logo from './logo.svg';
import './App.css';

function App() {
  console.log("???")
  return (
    <BrowserRouter>
      <Route exact path="/" component={AppCom}/>
      <Route path="/about" component={About}/>
    </BrowserRouter>
  );
}

function AppCom() {
  console.log("App", window.location)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
