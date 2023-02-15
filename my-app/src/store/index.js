import { configureStore } from "@reduxjs/toolkit";

import task from "../reducer/taskReducer";

// ???
const store = configureStore({
  reducer: { task },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;