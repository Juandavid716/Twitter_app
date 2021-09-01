import { Link } from "react-router-dom";
import routes from "./../../lib/routes";
import "./nav.scss";
const Nav = () => {
  const { restricted, unrestricted } = routes;

  return (
    <nav>
      <ul>
        {restricted.map(({ path, title }) => (
          <li key={title}>
            <Link to={path}>{title} </Link>
          </li>
        ))}
        {unrestricted.map(({ path, title }) => (
          <li key={title}>
            <Link to={path} key={title}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
