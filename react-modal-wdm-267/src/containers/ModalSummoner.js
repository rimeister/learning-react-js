// Import components
import { connect } from 'react-redux';
import ModalSummoner from '../components/ModalSummoner';

// Import action to show modal
import { showModal } from '../modules/modal/actions';

// Check if a modal is currently showing
function mapStateToProps(state) {
  return {
    modalShowing: state.modal.modals.length > 0 && !state.modal.hiding,
  }
}

// Create functions that will dispatch actions to show modals
function mapDispatchToProps(dispatch) {
  return {
    showMailingListModal: () => {
    	dispatch(showModal('MAILING_LIST'))
    },
  }
}

// Connect to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ModalSummoner);