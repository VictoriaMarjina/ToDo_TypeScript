import Component from './todo';
import * as actions from './actions/actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
    currentPage: selectors.getCurrentPage(state),
    currentPerson: selectors.getCurrentPerson(state),
    allUsers: selectors.getAllUsers(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    saveUser: (userData: any) => dispatch(actions.onSaveUser(userData)),
    submitFormData: (userData: any) => dispatch(actions.onSubmitFormData(userData)),
    deleteUser: (userData: any) => dispatch(actions.onDeleteUser(userData)),
    setAllUsers: () => dispatch(actions.onSetAllUsers()),
    deleteCurrentPerson: () => dispatch(actions.onDeleteCurrentPerson()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);