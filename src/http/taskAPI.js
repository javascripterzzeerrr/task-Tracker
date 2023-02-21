import { $host } from "./index";

export const addTask = async (task) => {
    const { newTask } = await $host.post('api/task/add', task);

    return newTask;
}

export const fetchTasksTimes = async () => {
    const { tasks, times } = await $host.get('api/task/');

    return { tasks, times };
}