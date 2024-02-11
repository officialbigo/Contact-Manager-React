import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      className="ui fixed menu"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <div className="ui container center">
        <h2>Contact Manager</h2>
      </div>
      <div className="right menu">
        <Link to="/aboutInitial">
          <button className="ui button white">About</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
