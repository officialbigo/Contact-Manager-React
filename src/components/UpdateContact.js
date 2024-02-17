import React, { useState } from "react";
import user from "../images/contact_user.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderNew from "./HeaderNew";
const UpdateContact = (props) => {
  const linkPorps = useLocation().state;
  const { name, number, email } = linkPorps.contact;
  const [newContact, setNewContact] = useState({
    name: name,
    number: number,
    email: email,
  });
  const onValueChange = (e) => {
    const { name, value } = e.target;
    setNewContact((previousVal) => ({
      ...previousVal,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  const updateContactHandler = (id) => {
    if (!newContact.name || !newContact.number || !newContact.email) {
      alert("Please enter all fields");
    } else {
      props.updateContactHandler({ id, ...newContact });
      goToRoute("/user");
    }
  };
  return (
    <div className="ui main">
      <HeaderNew />
      <div style={{ margin: "50px" }}></div>{" "}
      <div className="ui card centered">
        <div className="image">
          <img className="ui centered image" src={user} alt="user" />
        </div>
        <div className="content">
          <form className="ui form">
            <div className="field">
              <label>Name</label>
              <input
                style={{ textAlign: "center" }}
                type="text"
                name="name"
                placeholder={name}
                value={newContact.name}
                onChange={onValueChange}
              />
            </div>
            <div className="description">
              <div className="field">
                <label>Number</label>
                <input
                  style={{ textAlign: "center" }}
                  type="number"
                  name="number"
                  placeholder={number}
                  value={newContact.number}
                  onChange={onValueChange}
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  style={{ textAlign: "center" }}
                  type="text"
                  name="email"
                  placeholder={email}
                  value={newContact.email}
                  onChange={onValueChange}
                />
              </div>

              <button
                className="ui fluid button green"
                onClick={() => updateContactHandler(linkPorps.contact.id)}
                style={{ cursor: "pointer" }}
              >
                Update
              </button>
              <Link to="/user">
                <button
                  className="ui fluid button red"
                  style={{ cursor: "pointer" }}
                >
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateContact;
