import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: Date.now(),
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
      state.push(newUser);
    },
    deleteUser: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;