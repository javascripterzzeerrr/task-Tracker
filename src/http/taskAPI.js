import { $host } from "./index";

export const addTask = async (task) => {
    const response = await $host.post('api/task/add', task);

    return response;
}

export const fetchTasksTimes = async () => {
    const response = await $host.get('api/task/');

    return response;
}