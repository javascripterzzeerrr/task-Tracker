import './Time.scss';

const Time = ({ startTime, doneTime }) => {
    return (
        <>
            <div className="grid__item info">{ startTime }</div>
            <div className="grid__item info">{ doneTime }</div>
        </>
    )
}

export default Time;