import { useState } from "react";

import "./modal.scss";

const Modal = ({ updateIsActiveModal }) => {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [doneTime, setDoneTime] = useState(null);

  const closeBtn = () => {
    if (title.length > 2 && startTime && doneTime) {
      updateIsActiveModal(false);
    }
  };

  const isValidTime = (string) => {
    return (string.match( /\d\d:\d\d/ ).length > 0)
  };

  const onUpdateStartTime = (e) => {
    let inpStr = e.target.value;
    if (isValidTime(inpStr)) {
        setStartTime(inpStr);
    }
  }

  const onUpdateDoneTime = (e) => {
    let inpStr = e.target.value;
    if (isValidTime(inpStr)) {
        setDoneTime(inpStr);
    }
  }

  return (
    <div className="modal">
      <div className="modal__window">
        <div className="modal__window__add">
          <div className="time">Напишите название</div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="title__add"
            placeholder="What will the task be called?"
            value={title}
          />
          <div className="time">Опишите задачу</div>
          <textarea
            type="text"
            className="desc__add"
            placeholder="Briefly describe your task"
          />
          <div className="time">Выберити время начала (в формате xx:xx)</div>
          <input
            onChange={onUpdateStartTime}
            type="text"
            className="title__add"
            placeholder="Example 00:00"
          />
          <div className="time">
            Укажите продолжительность задача (в формате xx:xx)
          </div>
          <input
            onChange={onUpdateDoneTime}
            type="text"
            name="city"
            list="cityname"
            placeholder="Example 01:00"
          />
          <datalist id="cityname">
            <option value={2}></option>
            <option value={1}></option>
            <option value="полчаса"></option>
          </datalist>
          <button onClick={closeBtn} className="btn">Add</button>
        </div>
        <button onClick={() => updateIsActiveModal(false)} className="btn-close">
          X
        </button>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Modal;