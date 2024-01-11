import { createSlice } from "@reduxjs/toolkit";
import FigmaImg from "../assets/images/figma.png";

const initialState = {
  data: [
    { id: 1, from: "me", message: "Hello, Darshan" },
    { id: 1, from: "me", message: "Hello, Darshan" },
    { id: 1, from: "you", message: "Hello" },
    { id: 1, from: "me", message: "asdfasdfasdasdfal;ksdfja;sldkfjasdffla" },
    { id: 1, from: "you", message: "asdfal;sdkfjasd;flkasjdfkal;sdfjasdf" },
  ],
  isLoading: false,
  error: null,
};

export const messageSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    initMessage: (state, action) => {
      state.data = action.payload;
    },

    addMessage: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { initMessage, addMessage } = messageSlice.actions;
export default messageSlice.reducer;
