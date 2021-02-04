import React, { useState, FC } from 'react';
import InputModule from './components/inputModule/inputModule';
import TaskComponent from './components/task/taskComponent';
import * as types from './types/types';
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
            checkTask,
            deleteTask } = props;

    const [inputValue, setInputValue] = useState('');
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

    const renderTask = tasks.map((task: types.taskType) => (
        <TaskComponent
            key={task.id}
            id={task.id}
            text={task.text}
            isDone={task.isDone}
            checkTask={checkTask}
            deleteTask={deleteTask}
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