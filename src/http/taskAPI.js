import { $host } from "./index";

export const addTaskAPI = async (task) => {
    const response = await $host.post('api/task/add', task);

    return response;
}

export const fetchTasksTimesAPI = async () => {
    const response = await $host.get('api/task/');

    return response;
}