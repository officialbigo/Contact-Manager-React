import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import DeleteConfirm from "./DeleteConfirm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchresults] = useState([]);
  const returnSearchResult = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        // return
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchresults(newContactList);
    } else {
      setSearchresults(contacts);
    }
  };
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: crypto.randomUUID(), ...contact }]);
  };
  const deleteContactHandler = (id) => {
    const new_contacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(new_contacts);
  };
  useEffect(() => {
    const get_contacts = JSON.parse(localStorage.getItem("contacts"));
    if (get_contacts !== null) {
      setContacts(get_contacts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            exact
            path="/"
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                searchTerm={searchTerm}
                returnSearchResult={returnSearchResult}
              />
            }
          />
          <Route exact path="/contact/:id" element={<ContactDetails />} />
          <Route
            exact
            path="/deleteConfirm"
            element={
              <DeleteConfirm deleteContactHandler={deleteContactHandler} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
