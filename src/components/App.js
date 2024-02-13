import Axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import DeleteConfirm from "./DeleteConfirm";
import UserLogin from "./UserLogin";
import RegisterUser from "./RegisterUser";
import AddContact from "./AddContact";
import UpdateContact from "./UpdateContact";
import About from "./About";
import AboutInitial from "./AboutInitial";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchresults] = useState([]);
  const [authToken, setAuthToken] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");

  const changeAuthToken = (token) => {
    setAuthToken(token);
  };

  useEffect(() => {
    if (authToken !== "") {
      localStorage.setItem("authToken", JSON.stringify(authToken));
      // console.log(authToken);
      Axios.get(
        "https://contact-manager-backend-z9p3.onrender.com/api/users/user",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
        .then((res) => {
          const user_id = res.data.id;
          const user_email = res.data.email;
          setUserEmail(user_email);
          setUserId(user_id);
        })
        .catch((err) => {
          alert(err);
        });
      Axios.get(
        "https://contact-manager-backend-z9p3.onrender.com/api/contacts",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
        .then((res) => {
          let i = 0;
          const initialContacts = [];
          for (i = 0; i < res.data.length; i++) {
            const id = res.data[i]._id;
            let { name, number, email } = res.data[i];
            initialContacts.push({ id, name, number, email });
          }
          setContacts(initialContacts);
        })
        .catch((err) => {
          alert(err);
        });
    } else if (authToken === "") {
      localStorage.setItem("contacts", JSON.stringify([]));
    }
  }, [authToken]);
  useEffect(() => {
    const get_authToken = JSON.parse(localStorage.getItem("authToken"));
    if (get_authToken !== null) {
      setAuthToken(get_authToken);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const returnSearchResult = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
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
    Axios.post(
      "https://contact-manager-backend-z9p3.onrender.com/api/contacts",
      contact,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    )
      .then((res) => {
        const id = res.data._id;
        const { name, number, email } = res.data;
        setContacts([...contacts, { id, name, number, email }]);
      })
      .catch((err) => {
        alert("Please enter all fields", err);
      });
  };

  const deleteContactHandler = (id) => {
    Axios.delete(
      `https://contact-manager-backend-z9p3.onrender.com/api/contacts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    ).catch((err) => {
      alert(err);
    });
    const new_contacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(new_contacts);
  };
  const updateContactHandler = (updatedContact) => {
    const inputContact = {
      name: updatedContact.name,
      number: updatedContact.number,
      email: updatedContact.email,
    };
    Axios.put(
      `https://contact-manager-backend-z9p3.onrender.com/api/contacts/${updatedContact.id}`,
      inputContact,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    )
      .then((res) => {
        const id = res.data._id;
        const { name, number, email } = res.data;
        const updatedData = { name, number, email };
        setContacts((contacts) =>
          contacts.map((contact) =>
            contact.id === id ? { ...contact, ...updatedData } : contact
          )
        );
      })
      .catch((err) => {
        alert(err);
      });
  };
  const logout = () => {
    setAuthToken("");
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<UserLogin changeAuthToken={changeAuthToken} />}
          />
          <Route exact path="/register" element={<RegisterUser />} />
          <Route
            exact
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            exact
            path="/user"
            element={
              <ContactList
                logout={logout}
                authToken={authToken}
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                searchTerm={searchTerm}
                returnSearchResult={returnSearchResult}
              />
            }
          />
          <Route
            exact
            path="/contact/:id"
            element={<ContactDetails logout={logout} authToken={authToken} />}
          />
          <Route
            exact
            path="/deleteConfirm"
            element={
              <DeleteConfirm deleteContactHandler={deleteContactHandler} />
            }
          />
          <Route
            exact
            path="/updateContact"
            element={
              <UpdateContact updateContactHandler={updateContactHandler} />
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/aboutInitial" element={<AboutInitial />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
