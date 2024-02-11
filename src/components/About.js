import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import user from "../images/aashish.jpg";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

const About = () => {
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
  const redirectToLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/aashish-trk-286295249/";
  };
  const redirectToGithub = () => {
    window.location.href = "https://github.com/officialbigo";
  };
  const redirectToYoutube = () => {
    window.location.href = "https://www.youtube.com/@bigo5";
  };
  const { name, number, email } = {
    name: "TRK Aashish",
    number: "6303331096",
    email: "trk.aashish@gmail.com",
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
        }}
      >
        <h1>Contact Manager</h1>
      </div>{" "}
      <div style={{ margin: "50px" }}></div>{" "}
      <div className="ui container">
        <h2>About</h2>
        <p>
          Tired of forgetting contact information or having to search through
          your device for it? Contact Manager is here to help you save and
          retrieve contact information seamlessly across all your devices
          through the internet. Now you can effortlessly store and retrieve
          contact information that you don't have on your device or would like
          to have universally across all your devices.
        </p>
      </div>
      <div style={{ margin: "20px" }}></div>{" "}
      <div className="ui container">
        <h2>Development</h2>
        <ul>
          <li>
            Used React to create a dynamic and interactive interface on all
            systems with the help of semantic ui for css
          </li>
          <li>
            Used Node.js to handle all the necessary REST API requests from the
            front-end and link up with the database
          </li>
          <li>
            Used MongoDB to store the contacts and users with the appropriate
            schema for the respective.
          </li>
          <li>
            User authentication with jwt tokens generated and lasts up to 30
            days.
          </li>
        </ul>
      </div>
      <div className="ui container">
        <h2>Developed by :-</h2>
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
      </div>
      <div style={{ margin: "20px" }}></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button color="github" onClick={redirectToGithub}>
          <Icon name="github" /> Github
        </Button>
        <Button color="linkedin" onClick={redirectToLinkedIn}>
          <Icon name="linkedin" /> LinkedIn
        </Button>
        <Button color="youtube" onClick={redirectToYoutube}>
          <Icon name="youtube" /> YouTube
        </Button>
      </div>
      <div style={{ margin: "20px" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Link to="/user">
          <button className="ui button green">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
