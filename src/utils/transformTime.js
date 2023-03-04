export default function transformTime(time) {
    // console.log("Input time transform", time);
    // console.log(typeof time);
    return (time.getHours() < 10 ? ("0" + time.getHours()) : time.getHours())  + ":" + (time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes())
}