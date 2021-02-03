import React, { useState, FC } from 'react';
import InputModule from './components/inputModule/inputModule';
import TaskComponent from './components/task/taskComponent';
import * as types from './types/types';
//import * as todoActions from './actions/actions';
//import {  useDispatch, /*shallowEqua*/ } from 'react-redux';
//import { useTypedSelector } from '../utils/useSelector';
import './index.css';
export interface Props {
    tasks: Array<types.taskType>;
    addTask: Function;
    checkTask: Function;
    deleteTask: Function;
}

const Todo:FC<Props> = props => {
    const { tasks,
         addTask, 
         deleteTask, 
         checkTask } = props;
    //const tasks = useTypedSelector(state => state.reducer.tasks, shallowEqual);
    const [inputValue, setInputValue] = useState('');
    //const dispatch = useDispatch();

    const getInputValue = (value: string): void => {
        setInputValue(value);
    }

    const createTask = (): void => {
        const task: types.taskType = {
            id: Date.now(),
            text: inputValue,
            isDone: false,
        } 

        task.text.length !== 0 ?
        addTask(task):
        alert('enter some text'); 
        setInputValue('');
    }

    // const checkTask = (id: number): void => {
    //     console.log('check', id);
    //     dispatch(todoActions.checkTask(id));
    // }
    
    // const deleteTask = (id: number): void => {
    //     console.log('delete', id);
    //     dispatch(todoActions.deleteTask(id));
    // }

    const renderTask = tasks.map((task: types.taskType) => (
        <TaskComponent
            key={task.id}
            id={task.id}
            text={task.text}
            isDone={task.isDone}
            deleteTask={deleteTask}
            checkTask={checkTask}
        />
    ))

    return(
        <div className={'todo-wrapper'}>
            <InputModule
                createTask={createTask}
                getInputValue={getInputValue}
                value={inputValue}
            />
            <div className={'todo-wrapper_task-wrapper'}>
                {renderTask}
            </div>
        </div>
    )
}

export default React.memo(Todo);