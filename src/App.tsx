import React from 'react';
import './App.css';
import {List} from "./components/list/List";
import Icons from "./components/Icons/Icons";

function App() {
  return (
    <div className="App">
      <h1>{Icons.book()}<span>Notebook</span></h1>
      <div>
        <List/>
      </div>
    </div>
  );
}

export default App;
