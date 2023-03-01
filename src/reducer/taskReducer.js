import { createReducer } from "@reduxjs/toolkit";

import {
    initialUpdateTasks,
    addTask,
    deleteTask,
    addDeleteFlag,
    updateShiftTask,
    deleteFlag,
} from "../actions/index";

const initialState = {
    tasks: [],
    tasksTime: [],
    delTasksFlag: false,
    shiftTask: 0,
    deleteShift: 0,
};

const task = createReducer(initialState, builder => {
    builder
        .addCase(initialUpdateTasks, (state, action) => {
            if (action.payload.length > 1) {
                action.payload.map(({ id, title, desc, starttime, donetime, count, color, shift, date }) => {
                    state.tasks.push({
                        id, 
                        title,
                        desc,
                        startTime: starttime,
                        doneTime: donetime, 
                        count,
                        color,
                        shift,
                        date,
                    });
                    state.tasksTime.push({
                        id,
                        startTime: starttime,
                        doneTime: donetime,
                        count
                    })
                })
            } else {
                state.tasks.push({...action.payload});
                state.tasksTime.push({
                    id: action.payload.id,
                    startTime: action.payload.startTime,
                    doneTime: action.payload.doneTime,
                    count: action.payload.count
                })
            }

            // console.log("ATTEMPTION STATE.TASKS ", state.tasks); // proxys
            // console.log("ATTEMPTION STATE.TASKSTIMES ", state.tasksTime); // proxy
        })
        .addCase(addTask, (state, action) => {
            state.tasks.push({...action.payload, shift: state.shiftTask});
            // state.shiftTask = state.shiftTask + action.payload.count;
            state.tasksTime.push({
                id: action.payload.id,
                startTime: action.payload.startTime,
                doneTime: action.payload.doneTime,
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
        .addCase(deleteTask, (state, action) => {
            state.delTasksFlag = false;

            // change propertie is shift
            state.tasks = state.tasks.map((item, index) => {
                // console.log("COMPARE ===> ", index + " VS ", action.payload.index);
                if (index > action.payload.index) {
                    // console.log("AFTER ", state.deleteShift + action.payload.count);
                    // console.log("item.shift ", item.shift);
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
            state.shiftTask = state.shiftTask - action.payload.count;
            // console.log("BEFORE ", state.deleteShift + action.payload.count);
            state.deleteShift = state.deleteShift + action.payload.count;

            // console.log("INDEX PAYLOAD ", action.payload.index);
        })
        .addCase(updateShiftTask, (state, action) => {
            state.shiftTask = state.shiftTask + action.payload;
            console.log("state.shiftTask + action.payload", state.shiftTask);
        })
        .addDefaultCase(() => {});
})

export default task;