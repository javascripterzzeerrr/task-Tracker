import { createReducer } from "@reduxjs/toolkit";

import {
    addTask,
    deleteTask,
    addDeleteFlag,
    deleteFlag
} from "../actions/index";

const initialState = {
    tasks: [],
    tasksTime: [],
    delTasksFlag: false,
};

const task = createReducer(initialState, builder => {
    builder
        .addCase(addTask, (state, action) => {
            state.tasks.push(action.payload);
            state.tasksTime.push({
                id: action.payload.id,
                startTime: action.payload.startTime,
                doneTime: action.payload.doneTime
            })
        })
        .addCase(addDeleteFlag, (state) => {
            if (state.tasks.length > 0) {
                state.delTasksFlag = true;
            }
        })
        .addCase(deleteFlag, (state) => {
            state.delTasksFlag = false;
        })
        .addCase(deleteTask, (state, action) => {
            state.delTasksFlag = false;
            state.tasks = state.tasks.filter(task => {
                return task.id !== action.payload;
            })
            state.tasksTime = state.tasksTime.filter(taskTime => {
                return taskTime.id !== action.payload;
            })
        })
        .addDefaultCase(() => {});
})

export default task;