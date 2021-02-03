import Component from './todo';
import { connect } from 'react-redux';
import * as actions from './actions/actions';
import * as selectors from './selectors';
import * as types from './types/types';

const mapStateToProps = (state: types.InitialStateType) => ({
   tasks: selectors.getState(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    addTask: (userData: types.taskType) => dispatch(actions.addTask(userData)),
    checkTask: (id: number) => dispatch(actions.checkTask(id)),
    deleteTask: (id: number) => dispatch(actions.deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);