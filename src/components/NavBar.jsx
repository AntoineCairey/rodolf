import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../App.css";
import boutonHome from "../assets/home.svg";

function NavBar() {
  return (
    <div className="containerNav">
      <div className="logo">
        <img src={logo} alt="bouton retour" />
      </div>
      <div>
        <Link to="/">
          <img className="returnhome" src={boutonHome} alt="bouton retour" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
