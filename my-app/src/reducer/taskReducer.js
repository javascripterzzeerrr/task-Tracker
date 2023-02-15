import { createReducer } from "@reduxjs/toolkit";

import {
    addTask,
    deleteTask,
    addDeleteFlag,
    deleteFlag
} from "../actions/index";

const initialState = {
    tasks: [],
    delTasksFlag: false
};

const task = createReducer(initialState, builder => {
    builder
        .addCase(addTask, (state, action) => {
            state.tasks.push(action.payload);
        })
        .addCase(addDeleteFlag, (state) => {
            state.delTasksFlag = true;
        })
        .addCase(deleteFlag, (state) => {
            state.delTasksFlag = false;
        })
        .addCase(deleteTask, (state, action) => {
            state.delTasksFlag = false;
            state.tasks = state.tasks.filter(task => {
                return task.id !== action.payload
            })
        })
        .addDefaultCase(() => {});
})

export default task;