export default function createDate(time) {
    return new Date(2023, 3, 1, 
        time[0] !== "0" 
        ? 
            Number(time.slice(0, 2)) 
        : 
            Number(time[1]),
        time[3] !== "0" 
        ?
            Number(time.slice(3))
        :
            Number(time.at(-1)));
}