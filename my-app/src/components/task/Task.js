import { useMemo } from 'react';

import './task.scss';

const Task = ({ title, desc, startTime, doneTime }) => {
  console.log("RENDER Task")
  const colors = ["#9400D3", "#c5a804", "#099e2e", "#039dcc", "#a00854"];

  const randomColor = useMemo(() => {
    return Math.floor(Math.random() * (colors.length + 1));
  }, [title, desc, startTime, doneTime]);

  const color = colors[randomColor];

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
      </div>
  )
}

export default Task;