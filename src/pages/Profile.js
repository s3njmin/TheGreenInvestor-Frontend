import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import StateService from "../services/StateService";

import { Container, Box, Select, NativeSelect } from '@mantine/core';

export default function Profile() {

  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const [yearValue, setYearValue] = useState(0);
  const [currentState, setCurrentState] = useState("");

  const [value, setValue] = useState('');

  useEffect(() => {

    const currentUser = AuthService.getCurrentUser();

    // if (!currentUser) this.setState({ redirect: "/home" });
    // this.setState({ currentUser: currentUser, userReady: true })
    setCurrentUser(currentUser);
    setUserReady(true);

    StateService.getStates(currentUser.id).then(
      (response) => {
        setCurrentState(response.data.currentState);
        setYearValue(response.data.yearValue);
      }
    )

    if (redirect) {
      return <Navigate to={redirect} />
    }

  }, []);


  function OnClickButton() {
    StateService.changeStates(currentUser.id, value, yearValue).then(
      (response) => {
        setCurrentState(response.data.currentState);
        setYearValue(response.data.yearValue);
      }
    )
  }

  return (
    <Container size="xl" px="0">
      {(userReady) ?
        <div>
          <Box className="bg-white h-[80vh] rounded-none">
            <h3>
              <strong>{currentUser.username}</strong> Profile
            </h3>
            <p>
              <strong>Token:</strong>{" "}
              {currentUser.accessToken.substring(0, 20)} ...{" "}
              {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p>
            <p>
              <strong>Id:</strong>{" "}
              {currentUser.id}
            </p>
            {/* <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p> */}
            <strong>Authorities:</strong>
            <ul>
              {currentUser.roles &&
                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>

            <p>
              <strong>yearValue:</strong>{" "}
              {yearValue}
            </p>

            <p>
              <strong>currentState:</strong>{" "}
              {currentState}
            </p>

            {/* <Select
              label="your favorite state to change to"
              placeholder="Pick one"
              data={[
                { value: 'start', label: 'start' },
                { value: 'answering', label: 'answering' },
                { value: 'feedback', label: 'feedback' },
                { value: 'completed', label: 'completed' },
              ]}
            /> */}

            <NativeSelect
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              data={["start", "answering", "feedback", "completed"]}
            />

            <button onClick={OnClickButton}>Change State</button>

          </Box>

        </div> : null}
    </Container>
  );
}
