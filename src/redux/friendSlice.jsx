import { createSlice } from "@reduxjs/toolkit";
import FigmaImg from "../assets/images/figma.png";

const initialState = {
  data: [
    {
      id: 1,
      name: "nguyen van A",
      avatar: FigmaImg,
      lassMessage: "chat with you...",
    },
    {
      id: 2,
      name: "nguyen van B",
      avatar: FigmaImg,
      lassMessage: "chat with you...",
    },
    {
      id: 3,
      name: "nguyen van C",
      avatar: FigmaImg,
      lassMessage: "chat with you...",
    },
    {
      id: 4,
      name: "nguyen van B",
      avatar: FigmaImg,
      lassMessage: "chat with you...",
    },
  ],
  isLoading: false,
  error: null,
};

export const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    initData: (state, action) => {
      state.data = action.payload;
    },

    addFriend: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { initData, addFriend } = friendSlice.actions;
export default friendSlice.reducer;
