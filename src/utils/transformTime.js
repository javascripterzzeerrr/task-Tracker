export default function transformTime(time) {
    return (time.getHours() < 10 ? ("0" + time.getHours()) : time.getHours())  + ":" + (time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes())
}