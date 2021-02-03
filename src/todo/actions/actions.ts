import { ActionTypes } from '../actionTypes/actionTypes';
import * as types from '../types/types';

export type AddTaskType = {
    type: ActionTypes.ADD_TASK;
    data: types.taskType;
}

export const addTask = (data: types.taskType): AddTaskType => ({
    type: ActionTypes.ADD_TASK,
    data,
})

export type DeleteTaskType = {
    type: ActionTypes.DELETE_TASK;
    data: number;
}

export const deleteTask = (data: number): DeleteTaskType => ({
    type: ActionTypes.DELETE_TASK,
    data,
})

export type CheckTaskType = {
    type: ActionTypes.CHECK_TASK;
    data: number;
}

export const checkTask = (data: number): CheckTaskType => ({
    type: ActionTypes.CHECK_TASK,
    data,
})