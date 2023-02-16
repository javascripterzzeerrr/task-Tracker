import { createReducer } from "@reduxjs/toolkit";

import {
    addDashboardRows,
    dateListAction
} from "../actions/index";

const initialState = {
    dashboardRows: 30,
    dateList: [],
}

const dashboard = createReducer(initialState, builder => {
    builder
        .addCase(addDashboardRows, (state, action) => {
            state.dashboardRows = state.dashboardRows + action.payload;
        })
        .addCase(dateListAction, (state, action) => {
            state.dateList.push(action.payload);
        })
        .addDefaultCase(() => {});
})

export default dashboard;