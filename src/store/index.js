import { configureStore } from "@reduxjs/toolkit";

import task from "../reducer/taskReducer";
import dashboard from "../reducer/dashboardReducer";

// ???
const store = configureStore({
  reducer: { task, dashboard },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;