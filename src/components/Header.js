import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  const logout = () => {
    goToRoute("/");
    props.logout();
    alert("Logged out", props.authToken);
  };

  return (
    <div className="ui fixed inverted menu">
      <div className="ui container">
        <h2 style={{ color: "white" }}>Contact Manager</h2>
      </div>
      <div className="right menu">
        <Link to="/about">
          <button className="ui button white">About</button>
        </Link>
        <button className="ui button red" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
