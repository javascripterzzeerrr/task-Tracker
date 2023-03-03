import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTask, deleteFlag } from "../../actions/index";
import { changeFlagSelector, shiftTask } from "../../selectors/index";

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
  grid-row: row ${props => props.rowsInit} / row ${props => props.rows + 1};
`;

const Task = ({ id, title, desc, color, count, shift, index }) => {
  // console.log("INDEX in task ", index);
  // console.log("TASK COUNT ROW", count);
  const isChangeFlag = useSelector(changeFlagSelector);
  const shiftTaskItem = useSelector(shiftTask);
  // console.log("init shift ", shift);
  // console.log("shiftTaskItem ", shiftTaskItem);
  let newShift = Number(shift);

  // console.log("ROWS SINCE ", shift, " => ", shift + count);

  const dispatch = useDispatch();

  const handleClickOutTask = useCallback((event) => {
    const taskBlock = document.querySelector(".task");
    const minusBlock = document.querySelector(".minus");

    if (!event.path.includes(taskBlock) && !event.path.includes(minusBlock) && isChangeFlag === true) {
      dispatch(deleteFlag());
    }
  }, [isChangeFlag]);

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutTask);

    return () => document.removeEventListener('click', handleClickOutTask);
  }, [isChangeFlag, handleClickOutTask]);

  console.log("NEW SHIFT ", newShift);

  return (
    <TaskWrapper count={count} rowsInit={newShift + 1} rows={newShift + count} >
        <div style={{'borderLeft': `3px solid ${color}`}} className="task__container">
          <div className="content">
            <div style={{'color': `${color}`}} className="task__name" >{ title }</div>
            <div className="task_desc">
              { desc }
            </div>
            <div className="task__time">{/*Number(doneTime.getHours()) - Number(createdAt.getHours())*/}</div>
          </div>
        </div>
        {
          isChangeFlag 
          ?
          <img onClick={() => dispatch(deleteTask({ id, count, index }))} className="btn-close" src={trash} alt="trash" />
          :
          null
        }
    </TaskWrapper>
  )
}

export default Task;