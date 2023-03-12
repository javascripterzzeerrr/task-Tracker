import { createReducer } from "@reduxjs/toolkit";

import {
    initialUpdateTasks,
    startLoading,
    endLoading,
    addTask,
    deleteTask,
    addDeleteFlag,
    addShiftTask,
    updateShiftTask,
    deleteShiftItem,
    deleteFlag,
} from "../actions/index";

const initialState = {
    tasks: [],
    tasksTime: [],
    loading: false,
    delTasksFlag: false,
    shiftTask: 0,
    deleteShift: 0,
};

const task = createReducer(initialState, builder => {
    builder
        .addCase(initialUpdateTasks, (state, action) => {
            state.tasks = [];
            state.tasksTime =  [];
                action.payload.forEach(({ id, title, desc, starttime, donetime, count, color, shift, date }) => {
                    state.tasks.push({
                        id, 
                        title,
                        desc,
                        starttime,
                        donetime,
                        count,
                        color,
                        shift,
                        date,
                    });
                    state.tasksTime.push({
                        id,
                        starttime,
                        donetime,
                        count
                    })
                }
            )
        })
        .addCase(startLoading, (state) => {
            state.loading = true;
        })
        .addCase(endLoading, (state) => {
            state.loading = false;
        })
        .addCase(addTask, (state, action) => {
            state.tasks.push({...action.payload, shift: state.shiftTask});
            state.tasksTime.push({
                id: action.payload.id,
                starttime: action.payload.starttime,
                donetime: action.payload.donetime,
                count: action.payload.count
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
        .addCase(deleteShiftItem, (state, action) => {
            state.shiftTask = (state.shiftTask - action.payload.count) <= 0 ? 0 : (state.shiftTask - action.payload.count);
        })
        .addCase(deleteTask, (state, action) => {
            state.delTasksFlag = false;

            state.tasks = state.tasks.map((item, index) => {
                if (index > action.payload.index) {
                    return { ...item, shift: item.shift - action.payload.count}
                }
                return { ...item };
            })

            state.tasks = state.tasks.filter(task => {
                return task.id !== action.payload.id;
            })
            state.tasksTime = state.tasksTime.filter(taskTime => {
                return taskTime.id !== action.payload.id;
            })
            state.deleteShift = state.deleteShift + action.payload.count;
        })
        .addCase(addShiftTask, (state, action) => {
            state.shiftTask = action.payload;
        })
        .addCase(updateShiftTask, (state, action) => {
            state.shiftTask = state.shiftTask + action.payload;
        })
        .addDefaultCase(() => {});
})

export default task;