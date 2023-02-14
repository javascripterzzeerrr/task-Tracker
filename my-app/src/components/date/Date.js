import './date.scss';

const Date = ({ dateCurrent }) => {
    return (
        <div classname="grid__item info grid__item2">
            <p classname="day">{ dateCurrent }</p>
        </div>
    )
}

export default Date;