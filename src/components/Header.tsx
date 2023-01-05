import { useState, useRef, useEffect } from "react";
import "../styles/Header.scss";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import { tranObjToArr } from "../utils";
import { ReactComponent as HamIcon } from "../assets/ham.svg";

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

const dict: { [key: string]: string } = {
  "/": "首页",
  "/design": "设计流程",
  "/tool": "工具介绍",
  "/book": "操作手册",
  "/team": "设计团队",
};
const dictList = [
  { target: "/", text: "首页" },
  { target: "/design", text: "设计流程" },
  { target: "/tool", text: "工具介绍" },
  { target: "/book", text: "操作手册" },
  { target: "/team", text: "设计团队" },
];

const Header = () => {
  const location = useLocation();
  const [activeID, setActiveID] = useState<string>(dict[location.pathname]);
  const [ham, setHam] = useState<Boolean>(false);

  useEffect(() => {
    setActiveID(activeID);
  }, [location]);

  const changeActive = (text: string) => {
    setActiveID(text);
  };

  const changeHam = () => {
    setHam(!ham);
  };

  return (
    <div className="header">
      <div className="wrapper ">
        <div className="logo">
          <Link to="/" onClick={() => changeActive("首页")}>
            KarKit
          </Link>
        </div>
        <nav>
          <ol>
            {dictList.map((item, index) => (
              <NavItem
                key={index}
                target={item.target}
                text={item.text}
                activeID={activeID}
                changeActive={changeActive}
              />
            ))}
          </ol>
        </nav>
        <div onClick={changeHam} className="ham">
          <HamIcon />
        </div>
      </div>
      <div className={ham ? "active" : ""}></div>
      <div className="blank"></div>
    </div>
  );
};

export default Header;
