// Import React
import React, { Component } from 'react';

// Import styles
import './Modal.css';

class Modal extends Component {
  constructor() {
    super();

    // Bind functions to this component
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  // What happens when the modal first appears
  componentDidMount() {
    
  }

  // Clean up when the modal is removed
  componentWillUnmount() {
    
  }

  // When a key is pressed while the modal is active
  onKeyDown(e) {
    
  }

  // Close the modal when the background is clicked
  onBackgroundClick(e) {
    
  }

  // Hide the modal when it is closed
  onHide() {
    
  }

  // Create a generic wrapper component for our modal windows
  render() {
    return (
      null
    );
  }
}

export default Modal;
