import './tools.scss';

const Tools = ({ updateIsActiveModal }) => {
    return (
        <div className="grid__item grid__item1 tools">
          <div className="minus">-</div>
          <div onClick={() => updateIsActiveModal(true)} className="plus">+</div>
        </div>
    )
}

export default Tools;