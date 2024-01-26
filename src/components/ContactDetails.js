import React from "react";
import { Link } from "react-router-dom";
import user from "../images/contact_user.png";

const ContactDetails = (props) => {
  const { name, number, email } = ("adsfr", 123, "sad");
  // props.contact;
  return (
    <div className="main">
      <h1>gap text . Needs to be fixed </h1>
      <div className="ui card centered">
        <div className="image">
          <image src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">
            <h2>{number}</h2>
            <h3>{email}</h3>
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="ui button blue">Back to contacts</button>
      </Link>
    </div>
  );
};

export default ContactDetails;
