import { useState, useMemo } from "react";

import { v4 as uuidv4 } from 'uuid';

import Preview from "../preview/Preview";
import Time from "../time/Time";
import Task from "../task/Task";
import Date from "../date/Date";
import Tools from "../tools/Tools";
import Modal from "../modal/Modal";

import "./dashboard.scss";

const Dashboard = () => {
  console.log("RENDER Dashboard")
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const updateIsActiveModal = (bool) => {
    setIsActiveModal(bool);
  }

  const addTask = (task) => {
    setTasks(
      [...tasks, task]
    );
  }

  const renderTask = useMemo(() => {
    const content = tasks.map(({ title, desc, startTime, doneTime }) => {
      return <Task key={uuidv4()} title={title} desc={desc} startTime={startTime} doneTime={doneTime} />
    })

    return content;
  }, [tasks]);

  const content = tasks.length > 0 ? renderTask : null;

  return (
    <main>
      <Preview/>
      <div className="wrapper__grid">
        <Tools updateIsActiveModal={updateIsActiveModal} />
        {
          isActiveModal 
          ? 
          <Modal updateIsActiveModal={updateIsActiveModal} addTask={addTask} />
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

        <Time timeTask={"7:00"} />
        <Time timeTask={"7:00"} />
        <Time timeTask={"7:00"} />
        <Time timeTask={"7:00"} />
        <Time timeTask={"7:00"} />

        <div className="grid__item grid__item__content1">
          {
            content
          }
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
