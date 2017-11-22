const initialState = {
  modals: [],
  hiding: false 
};

export default function modal(state = initialState, action) {
  switch(action.type) {
    // Act when a modal needs to be shown
    case 'SHOW_MODAL': {
      // Clone the state
      const clonedState = JSON.parse(JSON.stringify(state));

      // Push new modal
      return clonedState;
    }
    // Act when a modal is starting to be hidden
    case 'HIDING_MODAL':
      // Clone the state
      const clonedState = JSON.parse(JSON.stringify(state));

      // State we are about to hide the modal

      return clonedState;
    // Act when a modal is hidden
    case 'HIDE_MODAL': {
      // Clone the state
      const clonedState = JSON.parse(JSON.stringify(state));
      
      // Remove the top-most modal
      

      // We are no longer in the process of hiding the modal
      

      return clonedState;
    }
    default:
      return state;
  }
}