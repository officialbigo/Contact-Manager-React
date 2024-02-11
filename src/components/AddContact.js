import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {
  const [newContact, setNewContact] = useState({
    name: "",
    number: "",
    email: "",
  });
  const navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  const onValueChange = (e) => {
    const { name, value } = e.target;
    setNewContact((previousVal) => ({
      ...previousVal,
      [name]: value,
    }));
  };
  const add = (e) => {
    e.preventDefault();
    props.addContactHandler(newContact);
    setNewContact({ name: "", number: "", email: "" });
    goToRoute("/user");
  };
  return (
    <div className="ui main">
      <h1>Add Contact</h1>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newContact.name}
            onChange={onValueChange}
          />
        </div>

        <div className="field">
          <label>Number</label>
          <input
            type="number"
            name="number"
            placeholder="Number"
            value={newContact.number}
            onChange={onValueChange}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newContact.email}
            onChange={onValueChange}
          />
        </div>

        <button className="ui button blue" style={{ cursor: "pointer" }}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
