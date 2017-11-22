// Import React
import React, { Component } from 'react';

// Import styles
import './ModalSummoner.css';

class ModalSummoner extends Component {
    constructor() {
        super();

        // Store button Refs for inert control
        this.buttons = [];
    }

    // Detect when a modal is showing or not
    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        // Reset refs as it will continue to store older versions
        this.buttons = [];

        return (
            <div className="ModalSummoner">
                <h2>Choose a dialog to open</h2>

                {/* Display a custom component to prompt for an email address */}
                

                {/* Show a generic component that can be customised as needed */}
                
            </div>
        );
    }
}

export default ModalSummoner;