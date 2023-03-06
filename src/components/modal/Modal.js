import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTask, updateShiftTask } from "../../actions/index";

import { shiftTask } from "../../selectors/index";

import { v4 as uuidv4 } from 'uuid';

import { transformDate } from "../../utils"; 

import { addTaskAPI, addShiftDashboardsAPI } from "../../http/taskAPI";

import randomColor from "../../utils/randomColor";
import createDate from "../../utils/createDate";

import "./modal.scss";

const Modal = ({ updateIsActiveModal }) => {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [starttime, setStartTime] = useState(null);
  const [donetime, setDoneTime] = useState(null);

  const shiftFromStore = useSelector(shiftTask);
  // const setTimes = useSelector(uniqueTimes);
  // console.log('Set Times ', setTimes);

  // console.log('starttime in set ', starttime);
  // console.log('donetime in set ', donetime);

  const dispatch = useDispatch();

  const adding = () => {
    if (title.length > 1 && starttime && donetime) {
      const taskID = uuidv4();

      const finishTimeStart = createDate(starttime);
      const finishTimeDone = createDate(donetime);

      let count = (Math.floor((transformDate(finishTimeDone) - transformDate(finishTimeStart)) / 1800) + 1) < 2
      ?
      3
      :
      (Math.floor((transformDate(finishTimeDone) - transformDate(finishTimeStart)) / 1800) + 1);

      let color = randomColor();

      console.log("COUNT ", count);

      // dispatch(addTask({
      //   id: taskID,
      //   title,
      //   desc,
      //   starttime: starttime,
      //   donetime: donetime,
      //   date: new Date(),
      //   count,
      //   color,
      //   shift: shiftFromStore,
      // }));

      console.log("MODAL ADDING TASK SHIFT shiftFromStore + count ", shiftFromStore + count)

      const task = {
        title,
        desc,
        starttime: starttime,
        donetime: donetime,
        date: new Date(),
        count,
        color,
        shift: shiftFromStore,
        shiftDashboard: (shiftFromStore + count)
      }

      console.log("ADDING NEW TASK IS NAME ", task.title);

      addTaskAPI(task)
          .then(date => {
            console.log('ADD TASK DATA FROM SERVER ', date);
            dispatch(addTask(date.data.task));
          })
          .then(dispatch(updateShiftTask(count)))
          .catch(e => console.log(e))

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
            value={starttime}
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
            value={donetime}
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