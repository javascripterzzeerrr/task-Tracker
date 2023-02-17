import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../../actions/index";

import { v4 as uuidv4 } from 'uuid';

import randomColor from "../../utils/randomColor";
import createDate from "../../utils/createDate";

import "./modal.scss";

const Modal = ({ updateIsActiveModal }) => {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [doneTime, setDoneTime] = useState(null);

  console.log("START TIME => ", startTime);
  console.log("DONE TIME => ", doneTime);

  const dispatch = useDispatch();

  const adding = () => {
    if (title.length > 1 && startTime && doneTime) {
      const taskID = uuidv4();

      console.log("createDate(startTime)", createDate(startTime));
      console.log("createDate(doneTime)", createDate(doneTime));

      dispatch(addTask({
        id: taskID,
        title,
        desc,
        startTime: createDate(startTime),
        doneTime: createDate(doneTime),
        color: randomColor()
      }));
      updateIsActiveModal(false);
    }
  };

  const isValidTime = (string) => {
    return (string.match(/\d\d:\d\d/).length > 0)
  };

  const onUpdateTime = (e) => {
    let inpStr = e.target.value;
    if (isValidTime(inpStr)) {
      if (e.target.name === "startTime") {
        setStartTime(inpStr);
      }
      else if (e.target.name === "doneTime") {
        setDoneTime(inpStr);
      }
    }
  }

  return (
    <div className="modal">
      <div className="modal__window">
        <div className="modal__window__add">
          <div className="time">Напишите название</div>
          <input
            onChange={e => setTitle(e.target.value)}
            type="text"
            className="title__add"
            placeholder="What will the task be called?"
            value={title}
          />
          <div className="time">Опишите задачу</div>
          <textarea
            onChange={e => setDesc(e.target.value)}
            type="text"
            className="desc__add"
            placeholder="Briefly describe your task"
            value={desc}
          />
          <div className="time">Выберити время начала (в формате XX:XX)</div>
          <input
            onChange={e => onUpdateTime(e)}
            name="startTime"
            type="text"
            className="title__add"
            placeholder="Example 00:00"
            value={startTime}
          />
          <div className="time">
            Укажите продолжительность задача (в формате XX:XX)
          </div>
          <input
            onChange={e => onUpdateTime(e)}
            name="doneTime"
            type="text"
            list="cityname"
            placeholder="Example 01:00"
            value={doneTime}
          />
          <datalist id="cityname">
            <option value={2}></option>
            <option value={1}></option>
            <option value="полчаса"></option>
          </datalist>
          <button onClick={adding} className="btn">Add</button>
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