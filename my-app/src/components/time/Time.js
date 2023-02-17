import { transformDate, transformTime } from "../../utils";

import './Time.scss';

const Time = ({ startTime, doneTime }) => {
    const secStart = transformDate(startTime);
    const secDone = transformDate(doneTime);

    let count = Math.floor((secDone - secStart) / 1800);

    let halfHour = [];

    for (let i = 1; i < count; ++i) {
        let timeHalfHour = secStart + i * 30 * 60;

        halfHour.push(
            (Math.floor(timeHalfHour / 3600) < 10 ? "0" + Math.floor(timeHalfHour / 3600) : Math.floor(timeHalfHour / 3600)) + ":" + (Math.floor(timeHalfHour / 60) % 60 < 10 ? "0"+ Math.floor(timeHalfHour / 60) % 60 : Math.floor(timeHalfHour / 60) % 60)
        );
    }

    return (
        <>
            <div className="grid__item info">{ transformTime(startTime) }</div>
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