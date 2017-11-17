import React, { Component } from 'react'
import $ from 'jquery';
import NiceOneBud from './NiceOneBud';
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

    this.handleAddToDo = this.handleAddToDo.bind(this);

  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i){
        return i !== index;
      }) 
    })
  }

  handleAddToDo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render() {
    return (
      <div className="container">
        <TodoInput onAddToDo={this.handleAddToDo}></TodoInput>
        <hr/>
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
        <NiceOneBud />
      </div>
    );
  }

}

class TodoInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'Lowest'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddToDo(this.state);
    this.setState({
      todoTitle:'',
      todoResponsible:'',
      todoPriority: 'Lowest'
    })
  }

  render() {
    return (
      <div>
      <h4>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputToDoTitle" className="col-sm-2 control-label">Title</label>
            <div className="col-sm-10">
              <input  name="todoTitle"
                      type="text"
                      className="form-control"
                      id="inputToDoTitle"
                      value={this.state.todoTitle}
                      onChange={this.handleInputChange}
                      placeholder="Title">
              </input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputToDoResponsible" className="col-sm-2 control-label">Responsible</label>
            <div className="col-sm-10">
              <input  name="todoResponsible"
                      type="text"
                      className="form-control"
                      id="inputToDoResponsible"
                      value={this.state.todoResponsible}
                      onChange={this.handleInputChange}
                      placeholder="Responsible">
                </input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputToDoDesc" className="col-sm-2 control-label">Description</label>
            <div className="col-sm-10">
              <textarea  name="todoDescription"
                      className="form-control"
                      id="inputToDoDesc"
                      value={this.state.todoDescription}
                      onChange={this.handleInputChange}>
              </textarea>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputToDoPriority" className="col-sm-2 control-label">Priority</label>
            <div className="col-sm-10">
              <select   name="todoPriority"
                        className="form-control"
                        id="inputToDoPriority"
                        value={this.state.todoPriority}
                        onChange={this.handleInputChange}>
                <option>Lowest</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Highest</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success">Add Todo</button>
            </div>
          </div>
        </form>
      </h4>
      </div>
    );
  }

}

export default App;
