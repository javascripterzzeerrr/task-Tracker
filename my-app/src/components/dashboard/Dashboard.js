import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import * as taskSelectors from "../../selectors/index";

import Preview from "../preview/Preview";
import Time from "../time/Time";
import Task from "../task/Task";
import Date from "../date/Date";
import Tools from "../tools/Tools";
import Modal from "../modal/Modal";

import "./dashboard.scss";

const Dashboard = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const tasks = useSelector(taskSelectors.tasksListSelector);
  const tasksTime = useSelector(taskSelectors.tasksTimeList);

  const updateIsActiveModal = (bool) => {
    setIsActiveModal(bool);
  }

  const renderTask = useMemo(() => {
    const content = tasks.map(({ id, title, desc, startTime, doneTime, color }) => {
      return <Task key={id} id={id} title={title} desc={desc} startTime={startTime} doneTime={doneTime} color={color} />
    })

    return content;
  }, [tasks]);

  const renderTimeList = useMemo(() => {
    return tasksTime.map(taskTime => {
      console.log("taskTime ", taskTime)
      return <Time key={taskTime.id} startTime={taskTime.startTime} doneTime={taskTime.doneTime} />;
    })
  }, [tasksTime]);

  const content = tasks.length > 0 ? renderTask : null;
  const timeList = tasksTime.length > 0 ? renderTimeList : null;

  return (
    <main>
      <Preview/>
      <div className="wrapper__grid">
        <Tools updateIsActiveModal={updateIsActiveModal} />
        {
          isActiveModal 
          ? 
          <Modal updateIsActiveModal={updateIsActiveModal} />
          :
          null
        }

        <Date dateCurrent={"7, Mon"} />
        <Date dateCurrent={"8, Tue"} />
        <Date dateCurrent={"9, Wed"} />
        <Date dateCurrent={"10, Thu"} />
        <Date dateCurrent={"11, Fri"} />
        <Date dateCurrent={"12, Sat"} />
        <Date dateCurrent={"13, Sun"} />

        {
          timeList
        }

        <div className="grid__item grid__item__content1">
          { content }
        </div>

        <div className="grid__item grid__item__content2">
        </div>

        <div className="grid__item grid__item__content3">
        </div>

        <div className="grid__item grid__item__content4">
        </div>

        <div className="grid__item grid__item__content5">
        </div>

        <div className="grid__item grid__item__content6">
        </div>

        <div className="grid__item grid__item__content7">
        </div>

      
    </div>
    </main>
  );
}

export default Dashboard;