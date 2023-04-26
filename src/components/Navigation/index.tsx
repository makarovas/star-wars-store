import { Link } from "react-router-dom";

const Navigation = () => (
  <nav id="nav-bar">
    <ul>
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/people" className="nav-link">
          People
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
