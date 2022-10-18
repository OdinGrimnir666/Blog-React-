import { createSlice } from "@reduxjs/toolkit";
import { login,register } from "./ApiRequest/AuthRequest";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id:localStorage.getItem("Id"),
    token: localStorage.getItem("token"),
    firstName: localStorage.getItem("firstName"),
    auth: localStorage.getItem("token") ? true : false,
  },
  reducers: {
    logout(state, action) {
      console.log(action.payload);
      localStorage.clear();
      state.auth=false;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },

  extraReducers: {
    [register.rejected]: (state, action) => {
      alert("Вы оишбка зарегистрирвоание");
    },
    [register.fulfilled]: (state, action) => {
      alert("Вы успешно зарегистрирвоались");
    },
    [login.rejected]: (state, action) => {
      console.log(action.payload);
      alert("Ошибка залогирование");
    },
    [login.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.Token);
      localStorage.setItem("userName", action.payload.UserName);
      localStorage.setItem("Id", action.payload.Id);
      state.auth = true;
      alert("Вы успешно Залогинились");
    },
  },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
