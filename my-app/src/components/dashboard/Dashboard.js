import "./dashboard.scss";

import Preview from "../preview/Preview";
import Time from "../time/Time";
import Task from "../task/Task";
import Date from "../date/Date";
import Tools from "../tools/Tools";

const Dashboard = () => {
  return (
    <main>
      <Preview/>
      <div className="wrapper__grid">
        <Tools />

        <Date dateCurrent={"7, Mon"} />
        <Date dateCurrent={"8, Tue"} />
        <Date dateCurrent={"9, Wed"} />
        <Date dateCurrent={"10, Thu"} />
        <Date dateCurrent={"11, Fri"} />
        <Date dateCurrent={"12, Sat"} />
        <Date dateCurrent={"13, Sun"} />

        <div className="grid__item grid__item__content1">
          <Task />
        </div>

        <div className="grid__item grid__item__content2">
          <Task />
          <Task />
        </div>

        <div className="grid__item grid__item__content3">
          <Task />
        </div>

        <div className="grid__item grid__item__content4">
          <Task />
        </div>

        <div className="grid__item grid__item__content5">
          <Task />
        </div>

        <div className="grid__item grid__item__content6">
          <Task />
          <Task />
          <Task />
        </div>

        <div className="grid__item grid__item__content7">
          <Task />
        </div>

      
    </div>
    </main>
  );
}

export default Dashboard;
