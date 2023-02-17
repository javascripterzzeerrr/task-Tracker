import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import * as taskSelectors from "../../selectors/index";

import Preview from "../preview/Preview";
import Time from "../time/Time";
import Task from "../task/Task";
import Date from "../date/Date";
import Tools from "../tools/Tools";
import Modal from "../modal/Modal";
import Column from "../column/Column";
import GridWrapper from "../gridWrapper/GridWrapper";

import "./dashboard.scss";

const Dashboard = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const tasks = useSelector(taskSelectors.tasksListSelector);
  const tasksTime = useSelector(taskSelectors.tasksTimeList);
  console.log("tasksTime ", tasksTime);
  const rows = useSelector(taskSelectors.dashboardRows);

  const updateIsActiveModal = (bool) => {
    setIsActiveModal(bool);
  }

  const renderTask = useMemo(() => {
    return tasks.map(({ id, title, desc, startTime, doneTime, color }) => {
      return <Task key={id} id={id} title={title} desc={desc} startTime={startTime} doneTime={doneTime} color={color} />
    });
  }, [tasks]);

  const renderTimeList = useMemo(() => {
    return tasksTime.map(taskTime => {
      return <Time key={taskTime.id} startTime={taskTime.startTime} doneTime={taskTime.doneTime} />;
    });
  }, [tasksTime]);

  const content = tasks.length > 0 ? renderTask : null;

  const timeList = tasksTime.length > 0 ? renderTimeList : null;

  return (
    <main>
      <Preview/>
      <GridWrapper rows={rows}>
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

        <Column number={1}>
          {content}
        </Column>
        <Column number={2}>
          
        </Column>
        <Column number={3}>
          
        </Column>
        <Column number={4}>
          
        </Column>
        <Column number={5}>
          
        </Column>
        <Column number={6}>
          
        </Column>
        <Column number={7}>
          
        </Column>
      
      </GridWrapper>
    </main>
  );
}

export default Dashboard;