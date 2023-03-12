import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import shallowequal from "shallowequal";

import * as taskSelectors from "../../selectors/index";

import { initialUpdateTasks, startLoading, endLoading, addShiftTask } from "../../actions";

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

const monthsList = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Dashboard = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const tasks = useSelector(taskSelectors.tasksListSelector);
  const tasksTime = useSelector(taskSelectors.tasksTimeList);
  const rows = useSelector(taskSelectors.dashboardRows);

  const day = useSelector(taskSelectors.dateDay);
  const week = useSelector(taskSelectors.daysWeek);
  const month = useSelector(taskSelectors.dateMonth);
  const year = useSelector(taskSelectors.dateYear);

  const dispatch = useDispatch();

  const gettingDataFromServer = () => {
    dispatch(startLoading());
    fetchTasksTimesAPI()
      .then(data => {
          dispatch(initialUpdateTasks(data.data.Tasks))

          return data;
      })
      .then(data => {
        dispatch(addShiftTask(data.data.dashboards.at(-1).shifttask))
      })
      .catch(e => console.log(e))
    dispatch(endLoading());
  }

  const gettinTaskByDate = () => {
    
  }

  useEffect(() => {
    gettingDataFromServer();
  }, []);

  const updateIsActiveModal = (bool) => {
    setIsActiveModal(bool);
  }

  const renderTask = useMemo(() => {
    return tasks.map((item, index) => {
      return <Task key={item.id} {...item} index={index} />
    });
  }, [tasks]);

  const renderTimeList = useMemo(() => {
    return tasksTime.map(taskTime => {
      return <Time key={taskTime.id} starttime={taskTime.starttime} donetime={taskTime.donetime} count={taskTime.count} />;
    });
  }, [tasksTime]);

  const listDate = useMemo(() => {
    let listDate = [];

    if (day + 7 <= 31) {
      for (let i = 0; i < 7; ++i) {
        listDate.push(<Date dateCurrent={`${day + i},` + ` ${week}`} />)
      }
    }

    return listDate;
  }, [day, week, month, year]);

  const content = tasks.length > 0 ? renderTask : null;
  
  const timeList = tasksTime.length > 0 ? renderTimeList : null;
  const dateList = listDate;

  return (
    <main>
      <Preview startDay={day} startMon={monthsList[month]} endDay={day + 7} endMon={monthsList[month]} />
      <GridWrapper rows={rows}>
        <Tools updateIsActiveModal={updateIsActiveModal} />
        {
          isActiveModal 
          ? 
          <Modal updateIsActiveModal={updateIsActiveModal} />
          :
          null
        }

        {dateList}
        
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