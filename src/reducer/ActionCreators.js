import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTasksTimesAPI } from "../http/taskAPI";

export const fetchTasks = createAsyncThunk(
    'tasks/fetchAll',
    (_, thunkAPI) => {
        fetchTasksTimesAPI()
    }
)