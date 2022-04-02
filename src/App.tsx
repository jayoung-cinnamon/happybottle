import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import GlobalStyles from "./reset/reset";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <TextField>Box1</TextField>
        <TextField>Box2</TextField>
      </header>
    </div>
  );
}

export default App;
const TextField = styled.span`
  display: flex;
  width: 150px;
  height: 150px;
  background-color: wheat;
  justify-content: center;
  align-items: center;
`;
