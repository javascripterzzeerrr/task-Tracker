import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTask, deleteFlag } from "../../actions/index";
import { changeFlagSelector } from "../../selectors/index";

import './task.scss';

import trash from '../../img/trash-can.png';

const Task = ({ id, title, desc, startTime, doneTime, color }) => {
  const isChangeFlag = useSelector(changeFlagSelector);

  const dispatch = useDispatch();

  const handleClickOutTask = useCallback((event) => {
    const taskBlock = document.querySelector(".task");
    const minusBlock = document.querySelector(".minus");

    if (!event.path.includes(taskBlock) && !event.path.includes(minusBlock) && isChangeFlag === true) {
      dispatch(deleteFlag());
    }
  }, [isChangeFlag]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutTask);

    return () => document.removeEventListener('click', handleClickOutTask);
  }, [isChangeFlag, handleClickOutTask]);

  return (
      <div className="task">
          <div style={{'borderLeft': `3px solid ${color}`}} className="task__container">
            <div className="content">
              <div style={{'color': `${color}`}} className="task__name" >{ title }</div>
              <div className="task_desc">
                { desc }
              </div>
              <div className="task__time">{ startTime + "-" + doneTime }</div>
            </div>
          </div>
          {
            isChangeFlag 
            ?
            <img onClick={() => dispatch(deleteTask(id))} className="btn-close" src={trash} alt="trash" />
            :
            null
          }
      </div>
  )
}

export default Task;