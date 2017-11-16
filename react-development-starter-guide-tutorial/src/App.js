import React, { Component } from 'react';
import Bootstrap from 'bootstrap'
import logo from './logo.svg';
import './App.css';

var todos = [
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

  constructor(props) {
    super(props);
    this.state = {
      // todo: toDos; A shorter way of writing this is simply 'todos'
      todos
    }
  }

  render() {
    return (

    );
  }
}

export default App;
