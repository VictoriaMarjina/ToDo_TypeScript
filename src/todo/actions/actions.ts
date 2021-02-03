import { ActionTypes } from '../actionTypes/actionTypes';
import * as types from '../types/types';

export type AddTaskType = {
    type: ActionTypes.ADD_TASK;
    data: types.taskType;
}

export const AddTask = (data: types.taskType): AddTaskType => ({
    type: ActionTypes.ADD_TASK,
    data,
})

export type DeleteTaskType = {
    type: ActionTypes.DELETE_TASK;
    data: types.taskType;
}

export const DeleteTask = (data: types.taskType): DeleteTaskType => ({
    type: ActionTypes.DELETE_TASK,
    data,
})

export type CheckTaskType = {
    type: ActionTypes.CHECK_TASK;
    data: types.taskType;
}

export const CheckTask = (data: types.taskType): CheckTaskType => ({
    type: ActionTypes.CHECK_TASK,
    data,
})