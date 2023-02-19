import { useDispatch } from "react-redux";

import { addDeleteFlag } from "../../actions/index";

import './tools.scss';

const Tools = ({ updateIsActiveModal }) => {
    const dispatch = useDispatch();

    return (
        <div className="grid__item grid__item1 tools">
          <div onClick={() => dispatch(addDeleteFlag())} className="minus">-</div>
          <div onClick={() => updateIsActiveModal(true)} className="plus">+</div>
        </div>
    )
}

export default Tools;