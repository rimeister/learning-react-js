import React, { Component } from 'react'
import $ from 'jquery';
import './App.css';
window.jQuery = $;
var Bootstrap = require('bootstrap');

var todos = [
  // Array with list of ToDo objects in it.
  {
    todoTitle: 'My First ToDo',
    todoDescription: 'My first Todo description',
    todoResponsible: 'Sebastian',
    todoPriority: 'low'
  },
  {
    todoTitle: 'My Second ToDo',
    todoDescription: 'My Second Todo description',
    todoResponsible: 'Sebastian',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'My Third ToDo',
    todoDescription: 'My Thid Todo description',
    todoResponsible: 'Sebastian',
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

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i){
        return i !== index;
      }) 
    })
  }

  render() {
    return (
      <div className="container">
        <h4>Todo Count: <span className="badge">{this.state.todos.length}</span></h4>
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle} <small><span className="label label-info">{todo.todoPriority}</span></small></h4>
              <p><span className="glyphicon glyphicon-user"></span>{todo.todoResponsible}</p>
              <p>{todo.todoDescription}</p>
              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash"></span></button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
