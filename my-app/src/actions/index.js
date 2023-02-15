import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("ADD_TASK");
export const deleteTask = createAction("DELETE_TASK");
export const addDeleteFlag = createAction("ADD_FLAG_DELETE");
export const deleteFlag = createAction("FLAG_DELETE");