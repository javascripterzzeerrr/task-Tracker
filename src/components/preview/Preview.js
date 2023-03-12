import './preview.scss';

import leftArrow from "../../img/left-arrow.png";
import rightArrow from "../../img/right-arrow.png";

const Preview = ({ startDay, startMon, endMon, endDay }) => {
    return (
        <div className="preview">
        <div className="preview__content">
          <img src={ leftArrow } alt="prev" />
          <p>current week, {`${startDay} ${startMon} - ${endDay} ${endMon}` }</p>
          <img src={ rightArrow } alt="next" />
        </div>
      </div>
    );
}

export default Preview;