import AddButton from "components/Button/AddButton";
import logo from "./logo.svg";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <AddButton />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="p-8"
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
