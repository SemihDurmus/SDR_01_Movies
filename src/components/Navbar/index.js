import { Link } from "react-router-dom";
import "./navbar.style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <FontAwesomeIcon className="logo" icon={faFilm} />
      <Link className=" navlink" to="/">
        HOME
      </Link>
      <Link className="navlink" to="/fav/">
        FAVORITES
      </Link>
    </div>
  );
}
