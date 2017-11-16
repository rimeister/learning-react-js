import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var toDos = [
  // Array with list of ToDo objects in it.
  {
    toDoTitle: 'My First ToDo',
    toDoDescription: 'Sebastian',
    toDoResponsible:'My first Todo description',
    todoPriority: 'low'
  },
  {
    toDoTitle: 'My Second ToDo',
    toDoDescription: 'Sebastian',
    toDoResponsible:'My Second Todo description',
    todoPriority: 'medium'
  },
  {
    toDoTitle: 'My Third ToDo',
    toDoDescription: 'Sebastian',
    toDoResponsible:'My Thid Todo description',
    todoPriority: 'high'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
