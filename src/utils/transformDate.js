export default function transformDate(time) {
    return time.getHours() * 3600 + time.getMinutes() * 60;
}