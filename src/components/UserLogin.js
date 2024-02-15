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
    Axios.post(
      "http://contact-manager-backend-env-1.eba-ukwyne2h.ap-south-1.elasticbeanstalk.com/api/users/login",
      formVal
    )
      .then((res) => {
        // const { email, password, msg } = res.data;
        console.log(res.data);
        // console.log("recieved", email, password, msg);
        // const givenToken = res.data.accessToken;
        // props.changeAuthToken(givenToken);
        // goToRoute("/user");
      })
      .catch((err) => {
        const error = err.response.status;
        if (error === 400) {
          alert("All fields are mandatory");
        } else if (error === 401) {
          alert("Invalid email or password", err);
        }
      });
  };
  return (
    <Segment placeholder>
      <HeaderNew />
      <Grid columns={2} relaxed="very" stackable>
        <GridColumn>
          <Form onSubmit={handleSubmit}>
            <FormInput
              icon="user"
              iconPosition="left"
              type="text"
              name="email"
              placeholder="Please enter"
              value={formVal.email}
              onChange={onValueChange}
            />
            <FormInput
              icon="lock"
              iconPosition="left"
              type="password"
              name="password"
              value={formVal.password}
              onChange={onValueChange}
            />
            <Button content="Login" primary style={{ cursor: "pointer" }} />
          </Form>
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
    </Segment>
  );
};

export default UserLogin;
