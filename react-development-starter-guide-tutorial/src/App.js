import React, { Component } from 'react'
import $ from 'jquery';
import './App.css';
window.jQuery = $;
var Bootstrap = require('bootstrap');

var todos = [
  // Array with list of ToDo objects in it.
  {
    todoTitle: 'My First ToDo',
    todoDescription: 'Sebastian',
    todoResponsible:'My first Todo description',
    todoPriority: 'low'
  },
  {
    todoTitle: 'My Second ToDo',
    todoDescription: 'Sebastian',
    todoResponsible:'My Second Todo description',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'My Third ToDo',
    todoDescription: 'Sebastian',
    todoResponsible:'My Thid Todo description',
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
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
            <h4 className="list-group-item-heading">{todo.todoTitle}</h4>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
