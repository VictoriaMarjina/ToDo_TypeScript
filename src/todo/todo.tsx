import React, { useState, FC } from 'react';
import InputModule from './components/inputModule/inputModule';
import TaskComponent from './components/task/taskComponent';
import { Props } from './index'
import * as types from './types/types';
//import * as todoActions from './actions/actions';
//import { useDispatch, /*shallowEqual*/ } from 'react-redux';
//import { useTypedSelector } from '../utils/useSelector';
import './index.css';

// export interface Props {
//     tasks: Array<types.taskType>;
//     addTask: any;
//     checkTask: any;
//     deleteTask: any;
// }

const Todo: FC<Props> = ({tasks, addTask, checkTask, deleteTask}) => {
    // const tasks = useTypedSelector(state => state.reducer.tasks, shallowEqual);
    // const {  } = props;

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

        addTask(task);
    }

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
            />
            <div className={'todo-wrapper_task-wrapper'}>
                {renderTask}
            </div>
        </div>
    )
}

export default React.memo(Todo);