import "../styles/NavBar.scss";

import NavigateButton from "./NavigateButton";

const NavBar = () => {
  return (
    <div className="header-wrapper">
      <div className="left-icon">LOGO</div>
      <div className="right-panel">
        <div className="nav-buttons">
          <NavigateButton text="设计流程" />
          <NavigateButton text="工具介绍" />
          <NavigateButton text="操作手册" />
          <NavigateButton text="设计团队" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
