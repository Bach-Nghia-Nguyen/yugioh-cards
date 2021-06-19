import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <nav className="side-menu">
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="menu-btn">Home</button>
      </Link>
      <Link to="/trap" style={{ textDecoration: "none" }}>
        <button className="menu-btn">Trap Cards</button>
      </Link>
      <Link to="/spell" style={{ textDecoration: "none" }}>
        <button className="menu-btn">Spell Cards</button>
      </Link>
    </nav>
  );
};

export default SideMenu;
