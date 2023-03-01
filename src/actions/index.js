import { createAction } from "@reduxjs/toolkit";

// task
export const initialUpdateTasks = createAction("INITIAL_UPDATE_TASKS");
export const addTask = createAction("ADD_TASK");
export const deleteTask = createAction("DELETE_TASK");
export const addDeleteFlag = createAction("ADD_FLAG_DELETE");
export const deleteFlag = createAction("FLAG_DELETE");
export const updateShiftTask = createAction("UPDATE_SHIFT_TASK");

// dashboard
export const addDashboardRows = createAction("ADD_DASHBOARD_ROW");
export const dateListAction = createAction("DATE_LIST");