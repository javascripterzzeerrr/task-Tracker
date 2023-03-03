export const tasksListSelector = state => state.task.tasks;
export const changeFlagSelector = state => state.task.delTasksFlag;
export const tasksTimeList = state => state.task.tasksTime;
export const shiftTask = state => state.task.shiftTask;
export const uniqueTimes = state => state.task.uniqueTimes;

export const dashboardRows = state => state.dashboard.dashboardRows;