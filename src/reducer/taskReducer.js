import { createReducer } from "@reduxjs/toolkit";

import {
    initialUpdateTasks,
    startLoading,
    endLoading,
    addTask,
    // addTimeSet,
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
    // uniqueTimes: new Set(),
    deleteShift: 0,
};

const task = createReducer(initialState, builder => {
    builder
        .addCase(initialUpdateTasks, (state, action) => {
            state.tasks = [];
            state.tasksTime =  [];
            // console.log("ACTION INITIAL FETCH ", action.payload);
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
                    // console.log("ADD TO TASKSTIMES ", state.tasksTime);
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
            console.log("NEED =====> ??????????????????????", state.shiftTask);
            state.tasks.push({...action.payload, shift: state.shiftTask});
            // state.shiftTask = state.shiftTask + action.payload.count;
            state.tasksTime.push({
                id: action.payload.id,
                starttime: action.payload.starttime,
                donetime: action.payload.donetime,
                count: action.payload.count
            })
        })
        // .addCase(addTimeSet, (state, action) => {
        //     action.payload.forEach(time => {
        //         state.uniqueTimes.push(time);
        //     })
        // })
        .addCase(addDeleteFlag, (state) => {
            if (state.tasks.length > 0) {
                state.delTasksFlag = true;
            }
        })
        .addCase(deleteFlag, (state) => {
            state.delTasksFlag = false;
        })
        .addCase(deleteShiftItem, (state, action) => {
            console.log("state.shiftTask ", state.shiftTask);
            console.log("state.shiftTask - action.payload.count", state.shiftTask - action.payload.count);

            state.shiftTask = (state.shiftTask - action.payload.count) <= 0 ? 0 : (state.shiftTask - action.payload.count);
        })
        .addCase(deleteTask, (state, action) => {
            console.log("STARTING DELETE SHIFT ", action.payload)
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
            // console.log("BEFORE ", state.deleteShift + action.payload.count);
            state.deleteShift = state.deleteShift + action.payload.count;

            // console.log("INDEX PAYLOAD ", action.payload.index);
        })
        .addCase(addShiftTask, (state, action) => {
            state.shiftTask = action.payload;
        })
        .addCase(updateShiftTask, (state, action) => {
            console.log("prev state SHIFT ", state.shiftTask);
            console.log("action.payload SHIFT ", action.payload)
            state.shiftTask = state.shiftTask + action.payload;
            console.log("state.shiftTask + action.payload", state.shiftTask);
        })
        .addDefaultCase(() => {});
})

export default task;