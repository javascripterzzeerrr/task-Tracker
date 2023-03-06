import { createAction } from "@reduxjs/toolkit";

// task
export const initialUpdateTasks = createAction("INITIAL_UPDATE_TASKS");
export const fetchUpdateAddedTasks = createAction("FETCH_UPDATE_ADDED_TASKS");
export const startLoading = createAction("START_LOADING");
export const endLoading = createAction("END_LOADING");
export const addTask = createAction("ADD_TASK");
export const addTimeSet = createAction("ADD_TIME_SET");
export const deleteTask = createAction("DELETE_TASK");
export const addDeleteFlag = createAction("ADD_FLAG_DELETE");
export const deleteFlag = createAction("FLAG_DELETE");
export const addShiftTask = createAction("ADD_SHIFT_TASK");
export const updateShiftTask = createAction("UPDATE_SHIFT_TASK");
export const deleteShiftItem = createAction("DELETE_SHIFT_ITEM");

// dashboard
export const addDashboardRows = createAction("ADD_DASHBOARD_ROW");
export const dateListAction = createAction("DATE_LIST");