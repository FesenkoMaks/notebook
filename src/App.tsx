import React from 'react';
import logo from './logo.svg';
import './App.css';
import {List} from "./components/list/List";

function App() {
  return (
    <div className="App">
      <h1>Notebook</h1>
      <div>
        <List/>
      </div>
    </div>
  );
}

export default App;
