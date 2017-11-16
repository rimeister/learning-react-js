import React, { Component } from 'react'
import $ from 'jquery';
import './App.css';
window.jQuery = $;
var Bootstrap = require('bootstrap');

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
      <div className="container">
        <h4>Todo Count: <span className="badge">{this.state.todos.length}</span></h4>
      </div>
    );
  }
}

export default App;
