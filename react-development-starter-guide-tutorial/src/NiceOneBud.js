import React, { Component } from 'react'

class NiceOneBud extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNice: false
      //
    }
  }

  setTheNiceOne() {
    this.setState ({
      isNice: !this.state.isNice
    })
  }

  render() {
    return (
        <div className="niceDiv btn btn-danger btn-md" onClick={this.setTheNiceOne.bind(this)}>{(this.state.isNice) ? 'Nice one,' : null} Bud</div>
    )
  }

}

export default NiceOneBud;