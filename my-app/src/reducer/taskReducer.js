import { createReducer } from "@reduxjs/toolkit";

import {
    addTask,
    deleteTask,
    addDeleteFlag,
    deleteFlag,
} from "../actions/index";

const initialState = {
    tasks: [],
    tasksTime: [],
    delTasksFlag: false,
    shiftTask: 0
};

const task = createReducer(initialState, builder => {
    builder
        .addCase(addTask, (state, action) => {
            console.log("REDUCER state.shiftTask ", state.shiftTask);
            state.tasks.push({...action.payload, shift: state.shiftTask});
            console.log("REDUCER state.shiftTask ", state.shiftTask);
            state.shiftTask = state.shiftTask + action.payload.count;
            console.log("REDUCER state.shiftTask ", state.shiftTask, " action.payload.count ", action.payload.count);
            state.tasksTime.push({
                id: action.payload.id,
                startTime: action.payload.startTime,
                doneTime: action.payload.doneTime,
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
                return task.id !== action.payload.id;
            })
            state.tasksTime = state.tasksTime.filter(taskTime => {
                return taskTime.id !== action.payload.id;
            })
            state.shiftTask = state.shiftTask - action.payload.count;
        })
        .addDefaultCase(() => {});
})

export default task;