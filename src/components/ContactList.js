import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import Header from "./Header";
import { Button, Icon } from "semantic-ui-react";
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
        <h2 style={{ margin: "0 30px" }}>Contact List</h2>
      </div>
      <div className="ui icon input" style={{ margin: "0 30px" }}>
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
      <Link to="/add">
        <Button icon className="box-icon-button positive">
          <Icon name="plus" />
        </Button>
      </Link>
      <div style={{ margin: "0 30px" }}>
        <div className="ui celled list">
          {renderContactList.length > 0
            ? renderContactList
            : "No contacts in list"}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
