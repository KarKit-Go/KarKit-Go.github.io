import "../styles/Header.scss";
import { Link } from "react-router-dom";

interface INavItem {
  target: string;
  text: string;
}

const NavItem = (props: INavItem) => {
  const { target, text } = props;
  return (
    <li className="nav-item">
      <Link to={target}>{text}</Link>
    </li>
  );
};

const Header = () => {
  return (
    <div className="wrapper">
      <div className="logo">KarKit</div>
      <nav>
        <ol>
          <NavItem target="/" text="首页" />
          <NavItem target="/" text="设计流程" />
          <NavItem target="/" text="工具介绍" />
          <NavItem target="/" text="操作手册" />
          <NavItem target="/" text="设计团队" />
        </ol>
      </nav>
    </div>
  );
};

export default Header;
