import { transformDate, transformTime, createDate } from "../../utils";

import './Time.scss';

const Time = ({ starttime, donetime, count }) => {

    console.log('startTime in Time.js ', starttime);
    console.log('doneTime in Time.js ', donetime);

    let transformStartTime = createDate(starttime);
    let transformDoneTime = createDate(donetime);

    const secStart = transformDate(transformStartTime);
    const secDone = transformDate(transformDoneTime);

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