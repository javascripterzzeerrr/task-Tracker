import './date.scss';

const Date = ({ dateCurrent }) => {
    return (
        <div className="day">
            <p style={{"fontWeight": "bold", "color": "#8a8a8a"}}>{ dateCurrent }</p>
        </div>
    )
}

export default Date;