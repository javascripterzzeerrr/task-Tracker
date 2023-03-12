// task
export const tasksListSelector = state => state.task.tasks;
export const changeFlagSelector = state => state.task.delTasksFlag;
export const tasksTimeList = state => state.task.tasksTime;
export const shiftTask = state => state.task.shiftTask;
export const uniqueTimes = state => state.task.uniqueTimes;

// dashboards
export const dashboardRows = state => state.dashboard.dashboardRows;

// date
export const dateDay = state => state.date.cntDay;
export const dateMonth = state => state.date.cntMonth;
export const daysWeek = state => state.date.daysWeek;
export const dateYear = state => state.date.cntYear;