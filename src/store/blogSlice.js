import { createSlice } from "@reduxjs/toolkit";
import { PostPost, GetPost } from "./ApiRequest/PostRequest";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogList: [],
    responseStatus: 0,
  },
  reducers: {
    ResetResposeStatus(state, action) {
      state.responseStatus=0
    },
  },
  extraReducers: {
    [GetPost.rejected]: (state, action) => {
      state.blogList = [];
    },
    [GetPost.fulfilled]: (state, action) => {
      state.blogList = action.payload;
    },
    [PostPost.rejected]: (state, action) => {
      alert("ошибка создание поста");
    },
    [PostPost.fulfilled]: (state, action) => {
      state.responseStatus = 201
      alert("пост успешно создан");
    },
  },
});

export const { ResetResposeStatus} =
  blogSlice.actions;

export default blogSlice.reducer;
