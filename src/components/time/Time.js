import { transformDate, transformTime } from "../../utils";

import './Time.scss';

const Time = ({ createdAt, doneTime, count }) => {
    console.log("COUNT ", count);
    const secStart = transformDate(createdAt);
    const secDone = transformDate(doneTime);
    let halfHour = [];

    if (count === 3) {
        const diff = Math.floor((secDone - secStart) / 2);
        let timeHalfHour = secStart + diff;

        halfHour.push(
            (Math.floor(timeHalfHour / 3600) < 10 ? "0" + Math.floor(timeHalfHour / 3600) : Math.floor(timeHalfHour / 3600)) + ":" + (Math.floor(timeHalfHour / 60) % 60 < 10 ? "0"+ Math.floor(timeHalfHour / 60) % 60 : Math.floor(timeHalfHour / 60) % 60)
        );
    } else {
        for (let i = 1; i < count - 1; ++i) {
            let timeHalfHour = secStart + i * 30 * 60;

            halfHour.push(
                (Math.floor(timeHalfHour / 3600) < 10 ? "0" + Math.floor(timeHalfHour / 3600) : Math.floor(timeHalfHour / 3600)) + ":" + (Math.floor(timeHalfHour / 60) % 60 < 10 ? "0"+ Math.floor(timeHalfHour / 60) % 60 : Math.floor(timeHalfHour / 60) % 60)
            );
        }
    }

    console.log("halfHour ", halfHour);

    return (
        <>
            <div className="grid__item info">{ transformTime(createdAt) }</div>
            {
                halfHour.length > 0
                ?
                halfHour.map((item) => {
                    return (
                        <div className="grid__item info">
                            {item}
                        </div>
                    )
                })
                :
                null
            }
            <div className="grid__item info">
                { transformTime(doneTime) }
            </div>
        </>
    )
}

export default Time;