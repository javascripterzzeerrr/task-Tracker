import { transformDate, transformTime, createDate } from "../../utils";

import './Time.scss';

const Time = ({ startTime, doneTime, count }) => {
    console.log("COUNT ", count);
    console.log("startTime ", startTime);
    console.log("doneTime ", doneTime);

    let transformStartTime = createDate(startTime);
    let transformDoneTime = createDate(doneTime);

    const secStart = transformDate(transformStartTime);
    console.log("TYPEOFS ", typeof secStart);
    const secDone = transformDate(transformDoneTime);
    console.log("TYPEOFD ", typeof secDone);
    console.log(secStart)
    console.log(secDone)
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
            <div className="grid__item info">{ transformTime(transformStartTime) }</div>
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
                { transformTime(transformDoneTime) }
            </div>
        </>
    )
}

export default Time;