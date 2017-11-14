import React from 'react'
import Note from './Note'
import PropTypes from 'prop-types'

class Board extends React.Component {
  // Checks to see if the value of count is a number.

  propTypes: {
      count: PropTypes.number
/*    count: function(props,propName){
      if(typeof props[propName] !== "number") {
        return new Error("The count must be a number");
      }

      // Checks to see if the value of propName ('count', in this case) is greater than 100
      if(props[propName] > 100) {
        return new Error("Creating " + props[propName] + " notes is ridiculous.")
      }

    }
    */
  }

  constructor () {
    super()
    this.state = {
      notes: []
    }
  }

  componentWillMount() {
    if(this.props.count) {
      var url = `https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`
      fetch(url)
        .then(results => results.json())
        .then(array => array[0])
        .then(text => text.split('. '))
        .then(array => array.forEach(
          sentence => this.add(sentence)
        ))
        .catch(function(err) {
          console.log("Didn't connect to the API", err)
        })
    }
  }

  // Generates new ID
  nextId() {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  add(text) {
    var notes = [
      ...this.state.notes,
      {
        id: this.nextId(),
        note: text
      }
    ];
    this.setState({notes});
  }

  update(newText,id) {
    var notes = this.state.notes.map(
      // Huh, guess this spread operator is part of ES6
      note => (note.id !== id) ? note : {...note, note: newText}
    );
    this.setState({notes});
  }

  remove(id) {
    var notes = this.state.notes.filter(note => note.id !== id);
    this.setState({notes});
  }

  eachNote(note) {
    return (<Note key={note.id} 
        id={note.id} 
        onChange={this.update} 
        onRemove={this.remove}>
      {note.note}
    </Note>)
  }

  render() {
    return (<div className='board'>
        {this.state.notes.map(this.eachNote)}
        <button onClick={() => this.add("New note")}>+</button>
      </div>)
  }

}


export default Board