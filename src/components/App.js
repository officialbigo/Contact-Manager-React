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
            // render={(props) => (
            //   <AddContact {...props} addContactHandler={addContactHandler} />
            // )}
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            exact
            path="/"
            // render={(props) => (
            //   <ContactList
            //     {...props}
            //     contacts={contacts}
            //     deleteContactHandler={deleteContactHandler}
            //   />
            // )}
            element={
              <ContactList
                contacts={contacts}
                deleteContactHandler={deleteContactHandler}
              />
            }
          />
          <Route exact path="/contact/:id" element={<ContactDetails />} />
          <Route exact path="/deleteConfirm" element={<DeleteConfirm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
