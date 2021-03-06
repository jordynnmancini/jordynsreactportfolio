import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Header() {
  
  const location = useLocation();

  return ( <div className="header">
  <h1 className="title">Jordyn Mancini</h1>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default Header;
