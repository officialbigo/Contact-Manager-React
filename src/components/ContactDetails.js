import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/contact_user.png";
import Header from "./Header";
import { CopyToClipboard } from "react-copy-to-clipboard";
const ContactDetails = (props) => {
  const { id, name, number, email } = useLocation().state.info;
  const [isCopied1, setCopied1] = useState(false);
  const [isCopied2, setCopied2] = useState(false);

  const handleCopy1 = () => {
    setCopied1(true);
    setTimeout(() => {
      setCopied1(false);
    }, 200);
  };
  const handleCopy2 = () => {
    setCopied2(true);
    setTimeout(() => {
      setCopied2(false);
    }, 200);
  };

  return (
    <div className="main">
      <Header logout={props.logout} authToken={props.authToken} />
      <div style={{ margin: "50px" }}></div>{" "}
      <div className="ui card centered">
        <div className="image">
          <img className="ui centered image" src={user} alt="user" />
        </div>
        <div className="content">
          <div style={{ textAlign: "center" }} className="header">
            <h2>{name}</h2>
            <h3> </h3>
          </div>
          <div className="description">
            <h3 style={{ textAlign: "center" }}>
              {number}{" "}
              <CopyToClipboard text={number} onCopy={handleCopy1}>
                <i
                  className={` ${
                    isCopied1
                      ? "copy icon copied"
                      : "copy alternate outline icon"
                  }`}
                  style={{ cursor: "pointer" }}
                ></i>
              </CopyToClipboard>
            </h3>
            <h3 style={{ textAlign: "center" }}>
              {email}{" "}
              <CopyToClipboard text={email} onCopy={handleCopy2}>
                <i
                  className={` ${
                    isCopied2
                      ? "copy icon copied"
                      : "copy alternate outline icon"
                  }`}
                  style={{ cursor: "pointer" }}
                ></i>
              </CopyToClipboard>
            </h3>
          </div>
        </div>
      </div>
      <Link to="/user">
        <button className="ui fluid button blue" style={{ cursor: "pointer" }}>
          Back to contacts
        </button>
      </Link>
    </div>
  );
};
export default ContactDetails;
