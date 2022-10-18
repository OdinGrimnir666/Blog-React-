import { createAsyncThunk } from "@reduxjs/toolkit";

const apiHost = process.env.REACT_APP_API_HOST;
const apiPort = process.env.REACT_APP_API_PORT;

const ApiPath = `http://${apiHost}:${apiPort}/`;

export const register = createAsyncThunk(`${ApiPath}register`, async (data) => {
  const { firstName, password, email, lastName } = data;
  var json = {
    FirstName: firstName,
    LastName: lastName,
    Password: password,
    Email: email,
  };
  console.log(JSON.stringify(json));

  const response = await fetch(`${ApiPath}register`, {
    method: "POST",
    cache: "no-cache",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
    body: JSON.stringify(json),
  });
  return response.json();
});

export const login = createAsyncThunk(`${ApiPath}login`, async (data) => {
  const { firstName, password } = data;
  var json = {
    FirstName: firstName,
    Password: password,
  };
  console.log(JSON.stringify(json));

  const response = await fetch(`${ApiPath}login`, {
    method: "POST",
    cache: "no-cache",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
    body: JSON.stringify(json),
  });
  return await response.json();
});
