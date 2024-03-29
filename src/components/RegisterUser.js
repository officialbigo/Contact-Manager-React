import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput, Button, Form } from "semantic-ui-react";
import HeaderNew from "./HeaderNew";
const RegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    Axios.post("https://contact-manager-backend-uxzr.onrender.com/api/users/register", formData)
      .then((res) => {
        alert(`New user ${res.data.name} created.`);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
        goToRoute("/");
      })
      .catch((err) => {
        const error = err.response.status;
        if (error === 400) {
          alert("All fields are mandatory!");
        } else if (error === 401) {
          alert("User with email already exists!");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const onValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <HeaderNew />
      <div style={{ margin: "50px" }}></div>{" "}
      <div className="ui card centered">
        <Form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <h2>Name</h2>
          <FormInput
            type="text"
            name="name"
            placeholder="Please enter"
            value={formData.name}
            onChange={onValueChange}
          />
          <h2>Email</h2>
          <FormInput
            type="text"
            name="email"
            placeholder="Please enter"
            value={formData.email}
            onChange={onValueChange}
          />
          <h2>Password</h2>
          <FormInput
            icon="lock"
            iconPosition="left"
            type="password"
            name="password"
            value={formData.password}
            onChange={onValueChange}
          />
          <Button
            className="ui button green"
            type="submit"
            style={{ cursor: "pointer" }}
            loading={loading}
            disabled={loading}
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterUser;
