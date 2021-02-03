//import { Dispatch } from 'react';
import Component from './todo';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from './actions/actions';
//import * as selectors from './selectors';
import * as types from './types/types';
import { AppStateType } from '../root/rootReducer'
//import { ActionTypes } from './actionTypes/actionTypes';

// const Header: React.FC<HeaderProps> = ({
// 	currentUser,
// 	signOutStart,
// }) => ()

const mapStateToProps = (state: AppStateType) => ({
   //tasks: selectors.getState(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    addTask: (userData: types.taskType) => dispatch(actions.addTask(userData)),
    checkTask: (id: number) => dispatch(actions.checkTask(id)),
    deleteTask: (id: number) => dispatch(actions.deleteTask(id)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type Props = ConnectedProps<typeof connector>;

export default connector(Component);