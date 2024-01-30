import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/contact_user.png";

const ContactDetails = (props) => {
  const { id, name, number, email } = useLocation().state.info;
  return (
    <div className="main">
      <h1>gap text . Needs to be fixed </h1>
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
      <Link to="/">
        <button className="ui fluid button blue">Back to contacts</button>
      </Link>
    </div>
  );
};

export default ContactDetails;
