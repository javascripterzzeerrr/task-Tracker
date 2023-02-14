import './preview.scss';

import leftArrow from "../../img/left-arrow.png";
import rightArrow from "../../img/right-arrow.png";

const Preview = () => {

    return (
        <div className="preview">
        <div className="preview__content">
          <img src={ leftArrow } alt="prev" />
          <p>Last week, 7 Nov - 13 Nov</p>
          <img src={ rightArrow } alt="next" />
        </div>
      </div>
    );
}

export default Preview;