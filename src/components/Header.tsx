import "../styles/Header.scss";
const Header = () => {
  return (
    <div className="wrapper">
      <div className="nav-logo">KarKit</div>
      <div className="nav-buttons">
        <div className="nav-button">首页</div>
        <div className="nav-button">设计流程</div>
        <div className="nav-button">工具介绍</div>
        <div className="nav-button">操作手册</div>
        <div className="nav-button">设计团队</div>
      </div>
    </div>
  );
};

export default Header;
