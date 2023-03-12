import { configureStore } from "@reduxjs/toolkit";
// import { enableMapSet } from 'immer';

import task from "../reducer/taskReducer";
import dashboard from "../reducer/dashboardReducer";
import date from "../reducer/dateReducer";

// enableMapSet();

// ???
const store = configureStore({
  reducer: { task, dashboard, date },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;