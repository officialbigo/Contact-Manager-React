import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import Header from "./Header";
const ContactList = (props) => {
  const searchRef = useRef("");
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });
  return (
    <div className="ui main">
      <Header logout={props.logout} authToken={props.authToken} />
      <div style={{ margin: "50px" }}></div>{" "}
      <div style={{ marginBottom: "20px" }}>
        <h2>Contact List</h2>
        <Link to="/add">
          <button className="ui button green" style={{ cursor: "pointer" }}>
            Add Contact
          </button>
        </Link>
      </div>
      <div className="ui icon input">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search Contacts"
          className="prompt"
          value={props.term}
          onChange={() => {
            props.returnSearchResult(searchRef.current.value);
          }}
        />
        <i className="search icon" style={{ cursor: "pointer" }}></i>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No contacts in list"}
      </div>
    </div>
  );
};

export default ContactList;
