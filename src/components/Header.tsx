import { useState } from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface INavItem {
  target: string;
  text: string;
  activeID: string;
  changeActive: (text: string) => void;
}

const NavItem = (props: INavItem) => {
  const { target, text, activeID, changeActive } = props;
  const className = classNames("nav-item", { active: activeID === text });
  return (
    <li className={className} onClick={() => changeActive(text)}>
      <Link to={target}>{text}</Link>
    </li>
  );
};

const Header = () => {
  const [activeID, setActiveID] = useState<string>("");

  const changeActive = (text: string) => {
    setActiveID(text);
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <Link to="/" onClick={() => changeActive("首页")}>
          KarKit
        </Link>
      </div>
      <nav>
        <ol>
          <NavItem
            target="/"
            text="首页"
            activeID={activeID}
            changeActive={changeActive}
          />
          <NavItem
            target="/design"
            text="设计流程"
            activeID={activeID}
            changeActive={changeActive}
          />
          <NavItem
            target="/tool"
            text="工具介绍"
            activeID={activeID}
            changeActive={changeActive}
          />
          <NavItem
            target="/book"
            text="操作手册"
            activeID={activeID}
            changeActive={changeActive}
          />
          <NavItem
            target="/team"
            text="设计团队"
            activeID={activeID}
            changeActive={changeActive}
          />
        </ol>
      </nav>
    </div>
  );
};

export default Header;
