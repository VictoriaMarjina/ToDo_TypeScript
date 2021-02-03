import React, { useState } from 'react';
import InputModule from './components/inputModule/inputModule';
import TaskComponent from './components/task/taskComponent';
import * as types from './types/types';
import * as todoActions from './actions/actions';
import { useDispatch, shallowEqual } from 'react-redux';
import { useTypedSelector } from '../utils/useSelector';
import './index.css'

const Todo = () => {
    const tasks = useTypedSelector(state => state.reducer.tasks, shallowEqual);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const getInputValue = (value: string): void => {
        setInputValue(value);
    }

    const createTask = (): void => {
        const task: types.taskType = {
            id: Date.now(),
            text: inputValue,
            isDone: false,
        }

        dispatch(todoActions.AddTask(task));
    }

    const renderTask = tasks.map((task: types.taskType) => (
        <TaskComponent
            key={task.id}
            id={task.id}
            text={task.text}
        />
    ))

    return(
        <div className={'todo-wrapper'}>
            <InputModule
                createTask={createTask}
                getInputValue={getInputValue}
            />
            <div className={'todo-wrapper_task-wrapper'}>
                {renderTask}
            </div>
        </div>
    )
}

export default React.memo(Todo);