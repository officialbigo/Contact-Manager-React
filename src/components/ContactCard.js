import React from "react";
import { Link } from "react-router-dom";
import user from "../images/contact_user.png";

const ContactCard = (props) => {
  const contact = props.contact;
  const { id, name, number, email } = contact;
  // const deleteContactHandler = (id) => {
  //   props.deleteContactHandler(id);
  // };
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{
            pathname: `/contact/${id}`,
            state: { info: contact },
          }}
        >
          <div className="header">{name}</div>
          <div>{number}</div>
          <div>{email}</div>
        </Link>
        {/* <Link
          to={{
            pathname: "/deleteConfirm",
            state: { deleteContactHandler: deleteContactHandler, id: id },
          }}
        > */}
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.deleteContactHandler(id)}
        ></i>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ContactCard;
