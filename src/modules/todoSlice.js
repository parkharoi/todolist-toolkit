// src/redux/modules/todosSlice.js //액션 벨류 , 크리애이터 부분이 없어졌다
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todo: [],
  isLoading: false,
  error: null,
};

export const __gettodo = createAsyncThunk(
  `todoSlice/get`,
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://localhost:3001/haroi`);
      return thunkAPI.fulfillWithValue(data.data); //디스패치를 호출하면 이게 호출된다. //앞에 있는 데이터는 변수명
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postTodo = createAsyncThunk(
  `todoSlice/post`,
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`http://localhost:3001/haroi`, payload);
      return thunkAPI.fulfillWithValue(data.data); //디스패치를 호출하면 이게 호출된다. //앞에 있는 데이터는 변수명
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletTodo = createAsyncThunk(
  `todoSlice/delet`,
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(`http://localhost:3001/haroi/${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __patchTodo = createAsyncThunk(
  `todoSlice/patch`,
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `http://localhost:3001/haroi/${payload.id}`, //가져온 값중에 id에 해당하는 링크에 가져온 값들을 넣어준다.
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//리듀서
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {
    [__gettodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__gettodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__gettodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.todo = action.error;
    },
    [__postTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__postTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo.push(action.payload);
    },
    [__postTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.todo = action.error;
    },
    [__deletTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = state.todo.filter((a) => {
        return a.id !== action.payload; //filter, map 인덱스 값을 기준을 순차적으로 새로운 배열에 넣어줘서 다른 값을 비교한다.
      });
    },
    [__deletTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.todo = action.error;
    },
    [__patchTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__patchTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(state.todo);
      const idx = state.todo.findIndex((v) => v.id === action.payload.id); //findIdx는 충족하는 배열의 첫 번째 요소 인덱스를 반환
      state.todo[idx] = action.payload; // idx에 기존에 있던 state.todo의 findindex는 for문 같은 거라서 그 안에는 state.todo가 들어있다. 그 인덱스의 아이디랑 action.payload.id와 비교해서 같으면
    }, // 해당하는 인덱스의 값을 action.payload로 바꿔준다.
    [__patchTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.todo = action.error;
    },
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
