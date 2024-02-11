import React from "react";
import { Link } from "react-router-dom";
import user from "../images/contact_user.png";
import { Image } from "semantic-ui-react";
import "./ContactCard.css";

const ContactCard = (props) => {
  const contact = props.contact;
  const { id, name, number, email } = contact;
  return (
    <div className="item">
      <Image circular className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ info: contact }}>
          <div className="header">{name}</div>
          <div>{number}</div>
          <div>{email}</div>
        </Link>
        <Link
          to="/deleteConfirm"
          state={{
            contact: contact,
          }}
        >
          <i
            className="trash alternate outline icon"
            style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
          ></i>
        </Link>
        <Link
          to="/updateContact"
          state={{
            contact: contact,
          }}
        >
          <i
            className="edit alternate outline icon"
            style={{ color: "blue", marginTop: "7px", cursor: "pointer" }}
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
