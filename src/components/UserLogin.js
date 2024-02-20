import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  GridColumn,
  FormInput,
  Button,
  Divider,
  Form,
  Grid,
  Segment,
} from "semantic-ui-react";
import HeaderNew from "./HeaderNew";

const UserLogin = (props) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  const [formVal, setFormVal] = useState({
    email: "",
    password: "",
  });
  const onValueChange = (e) => {
    const { name, value } = e.target;
    setFormVal(() => ({
      ...formVal,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    setLoading(true);
    Axios.post(
      "https://contact-manager-backend-uxzr.onrender.com/api/users/login",
      formVal
    )
      .then((res) => {
        const givenToken = res.data.accessToken;
        props.changeAuthToken(givenToken);
        goToRoute("/user");
      })
      .catch((err) => {
        const error = err.response.status;
        if (error === 400) {
          alert("All fields are mandatory");
        } else if (error === 401) {
          alert("Invalid email or password", err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Segment placeholder>
      <HeaderNew />
      <Grid columns={2} relaxed="very" stackable>
        <GridColumn>
          <Form onSubmit={handleSubmit}>
            <h3 style={{ textAlign: "center" }}>Email</h3>
            <FormInput
              icon="user"
              iconPosition="left"
              type="text"
              name="email"
              placeholder="Please enter"
              value={formVal.email}
              onChange={onValueChange}
            />
            <h3 style={{ textAlign: "center" }}>Password</h3>
            <FormInput
              icon="lock"
              iconPosition="left"
              type="password"
              name="password"
              value={formVal.password}
              onChange={onValueChange}
            />
            <Button
              content="Login"
              primary
              style={{ cursor: "pointer" }}
              disabled={loading}
            />
          </Form>
          <div style={{ margin: "20px" }}></div>
          <button
            className="ui button blue"
            style={{ justifyContent: "center" }}
            onClick={() => {
              setFormVal({ email: "sample@gmail.com", password: "sample" });
            }}
          >
            Sample account
          </button>
        </GridColumn>

        <GridColumn verticalAlign="middle">
          <Link to="/register">
            <Button
              content="Sign up"
              icon="signup"
              size="big"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </GridColumn>
      </Grid>

      <Divider vertical>Or</Divider>
      <div className="ui container"></div>
    </Segment>
  );
};

export default UserLogin;
