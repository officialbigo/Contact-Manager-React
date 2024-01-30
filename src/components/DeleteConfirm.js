import React from "react";
import user from "../images/contact_user.png";

import { Link, useLocation } from "react-router-dom";

const DeleteConfirm = (props) => {
  const prop = useLocation().state;
  const { id, name, number, email } = prop.contact;
  return (
    <div className="ui main">
      <h1>gap text . Needs to be fixed </h1>
      <div className="ui card centered">
        <h2>Are you sure you want to delete this contact</h2>
        <button
          className="ui fluid button green"
          onClick={() => props.deleteContactHandler(id)}
        >
          Yes
        </button>
        <Link to="/">
          <button className="ui fluid button red">No</button>
        </Link>
      </div>
      <div className="ui main">
        <div className="ui card centered">
          <div className="image">
            <img className="ui centered image" src={user} alt="user" />
          </div>
          <div className="content">
            <div style={{ textAlign: "center" }} className="header">
              {name}
            </div>
            <div className="description">
              <h2 style={{ textAlign: "center" }}>{number}</h2>
              <h3 style={{ textAlign: "center" }}>{email}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
