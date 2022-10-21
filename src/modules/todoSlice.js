// src/redux/modules/todosSlice.js //액션 벨류 , 크리애이터 부분이 없어졌다
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  board: [],
  isLoading: false,
  error: null,
};

//리듀서
const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = boardSlice.actions;

export default boardSlice.reducer;
