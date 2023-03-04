import createDate from "./createDate";

export default function transformDate(time) {
    // let time = createDate(timeInp);
    // console.log(typeof time);
    // console.log("time from transformDate.js", time);
    return time.getHours() * 3600 + time.getMinutes() * 60;
}