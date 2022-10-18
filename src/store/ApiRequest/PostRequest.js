import { createAsyncThunk } from "@reduxjs/toolkit";

const apiHost = process.env.REACT_APP_API_HOST;
const apiPort = process.env.REACT_APP_API_PORT;

const ApiPath = `http://${apiHost}:${apiPort}/`;

export const GetPost = createAsyncThunk(`${ApiPath}post`, async () => {
  const response = await fetch(`${ApiPath}post`, { mode: "cors" });
  const data = await response.json();
  return data;
});

export const PostPost = createAsyncThunk(`${ApiPath}/post`, async (data) => {
  const { id, token, title, description, text } = data;
  var json = {
    UserId: id,
    Title: title,
    Description: description,
    Text: text,
  };
  console.log(JSON.stringify(json));

  const response = await fetch(`${ApiPath}post`, {
    method: "POST",
    cache: "no-cache",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      
      Authorization: `Bearer ${token}`,
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
    body: JSON.stringify(json),
  });
});
