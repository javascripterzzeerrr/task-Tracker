import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTask, deleteFlag, deleteShiftItem } from "../../actions/index";
import { changeFlagSelector } from "../../selectors/index";

import { deleteTaskAPI } from "../../http/taskAPI";

import styled from "styled-components";

import './task.scss';

import trash from '../../img/trash-can.png';

const TaskWrapper = styled.div`
  background-color: #fff;
  padding: 8px;
  border-radius: 10px;
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  grid-row: row ${props => props.rowsInit} / row ${props => props.rows + 1};
`;

const Task = ({ id, title, desc, color, count, shift, index, starttime, donetime }) => {
  const isChangeFlag = useSelector(changeFlagSelector);
  let newShift = Number(shift);

  const dispatch = useDispatch();

  const handleClickOutTask = useCallback((event) => {
    const taskBlock = document.querySelector(".task");
    const minusBlock = document.querySelector(".minus");

    if (!event.path.includes(taskBlock) && !event.path.includes(minusBlock) && isChangeFlag === true) {
      dispatch(deleteFlag());
    }
  }, [isChangeFlag]);

  const deleteTaskOnClick = () => {
    deleteTaskAPI(id)
      .then(dispatch(deleteTask({ id, count, index })))
      .then(dispatch(deleteShiftItem({ count })))
      .catch(e => console.log(e))
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutTask);

    return () => document.removeEventListener('click', handleClickOutTask);
  }, [isChangeFlag, handleClickOutTask]);

  return (
    <TaskWrapper count={count} rowsInit={newShift + 1} rows={newShift + count} >
        <div style={{'borderLeft': `3px solid ${color}`}} className="task__container">
          <div className="content">
            <div style={{'color': `${color}`}} className="task__name" >{ title }</div>
            <div className="task_desc">
              { desc }
            </div>
            <div className="task__time">{starttime + " - " + donetime}</div>
          </div>
        </div>
        {
          isChangeFlag
          ?
          <img onClick={deleteTaskOnClick} className="btn-close" src={trash} alt="trash" />
          :
          null
        }
    </TaskWrapper>
  )
}

export default Task;