import { createReducer } from "@reduxjs/toolkit";

import {
    initialDate,
    updateDaysWeek,
    updateDay,
    updateMonth
} from "../actions/index";

const initialState = {
    daysWeek: "Mon",
    cntDay: 12,
    cntMonth: 2,
    cntYear: 2023,
}

const date = createReducer(initialState, builder => {
    builder
        .addCase(initialDate, (state, action) => {
            state.daysWeek = action.payload.dayWeek;
            state.cntDay = action.payload.day;
            state.cntMonth = action.payload.month;
            state.cntYear = action.payload.year;
        })
        .addCase(updateDaysWeek, (state, action) => {
            state.daysWeek = action.payload.dayWeek;
        })
        .addCase(updateDay, (state, action) => {
            state.cntDay = action.payload.day;
        })
        .addCase(updateMonth, (state, action) => {
            state.cntMonth = action.payload.month;
        })
        .addDefaultCase(() => {});
})

export default date;