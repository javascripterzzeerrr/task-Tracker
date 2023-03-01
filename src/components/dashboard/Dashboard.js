import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as taskSelectors from "../../selectors/index";

import { initialUpdateTasks } from "../../actions";

import Preview from "../preview/Preview";
import Time from "../time/Time";
import Task from "../task/Task";
import Date from "../date/Date";
import Tools from "../tools/Tools";
import Modal from "../modal/Modal";
import Column from "../column/Column";
import GridWrapper from "../gridWrapper/GridWrapper";
import Grid from "../grid/Grid";

import { fetchTasksTimesAPI } from "../../http/taskAPI";

import "./dashboard.scss";

const Dashboard = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const tasks = useSelector(taskSelectors.tasksListSelector);
  const tasksTime = useSelector(taskSelectors.tasksTimeList);
  const rows = useSelector(taskSelectors.dashboardRows);

  const dispatch = useDispatch();

  const gettingDataFromServer = () => {
    fetchTasksTimesAPI()
        .then(data => {
          if (data.data.Tasks.length > 0) {
            console.log("DATA FETCH ", data);
            console.log("DATA FETCH TASKS ", data.data.Tasks);
            dispatch(initialUpdateTasks(data.data.Tasks))
          }
        })
        .catch(e => console.log(e))
  }

  useEffect(() => {
    gettingDataFromServer();
  }, []);
  
  console.log("TASKS ", tasks);
  console.log("tasksTime ", tasksTime);

  const updateIsActiveModal = (bool) => {
    setIsActiveModal(bool);
  }

  console.log("TASK STATE ", tasks);

  const renderTask = useMemo(() => {
    return tasks.map((item, index) => {
      console.log("IMPORTANT ", item);
      return <Task key={item.id} {...item} index={index} />
    });
  }, [tasks]);

  const renderTimeList = useMemo(() => {
    return tasksTime.map(taskTime => {
      console.log("IMPORTANT2 ", taskTime);
      console.log("taskTime in Dashboard.js ", taskTime);
      return <Time key={taskTime.id} startTime={taskTime.startTime} doneTime={taskTime.doneTime} count={taskTime.count} />;
    });
  }, [tasksTime]);

  const content = tasks.length > 0 ? renderTask : null;

  console.log("CONTENT ", content);

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
        
        <Column rows={rows} rowsInit={2} number={0}>
          <Grid rows={rows/2}>
            {timeList}
          </Grid>
        </Column>

        <Column rows={rows} rowsInit={2} number={1}>
          <Grid rows={rows/2}>
            {content}
          </Grid>
        </Column>
        <Column rows={rows} rowsInit={2} number={2}>
        <Grid rows={rows/2}>
            {content}
          </Grid>
        </Column>
        <Column rows={rows} rowsInit={2} number={3}>
          
        </Column>
        <Column rows={rows} rowsInit={2} number={4}>
          
        </Column>
        <Column rows={rows} rowsInit={2} number={5}>
          
        </Column>
        <Column rows={rows} rowsInit={2} number={6}>
          
        </Column>
        <Column rows={rows} rowsInit={2} number={7}>
          
        </Column>
      
      </GridWrapper>
    </main>
  );
}

export default Dashboard;