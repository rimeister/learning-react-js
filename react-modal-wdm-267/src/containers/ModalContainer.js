// Import compnents
import React, { Component } from 'react';
import { connect } from 'react-redux';


// Import modal management actions for Redux
import { hidingModal, hideModal } from '../modules/modal/actions';

// List all modal components to match with value from Redux
const MODAL_COMPONENTS = {
  
}

class ModalContainer extends Component {
  render() {
    // Don't render anything if we don't have a modal to show, or one we don't understand
    

    // Pass all props through, including those provided through Redux
    
    return null;
  }
}

// Get state of modal from Redux
function mapStateToProps(state) {
  return {
    
  }
}

// Create function to hideModal after CSS transition
function mapDispatchToProps(dispatch) {
  return {
    
  }
}

// Connect it to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);