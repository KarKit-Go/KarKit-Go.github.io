import { PageHeaderCommon, PageFooter } from "./PageHeader";
import team from "../assets/team.png";
import "../styles/Team.scss";

const Team = () => {
  return (
    <>
      <PageHeaderCommon text="设计团队" />
      <div className="team">
        <img src={team} alt="" className="pic" />
      </div>
      <PageFooter></PageFooter>
    </>
  );
};

export default Team;
