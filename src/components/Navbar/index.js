import { Link } from "react-router-dom";
import "./navbar.style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <FontAwesomeIcon className="logo" icon={faSpinner} />
      <Link className=" navlink" to="/">
        HOME
      </Link>
      <Link className="navlink" to="/fav/">
        FAVORITES
      </Link>
      <Link className="navlink" to="/top/">
        TOP RATED
      </Link>
    </div>
  );
}
