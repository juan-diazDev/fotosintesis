import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loasAllUsers: [],
  userDetail: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setGetAllUserState: (_, action) => action.payload,
    setCreateUserState: (_, action) => action.payload,
    setGetMeState: (state, action) => {
      state.userDetail = action.payload
    },
    setUpdateUserState: (_, action) => action.payload,
    setDeleteUserState: (_, action) => action.payload,
  },
});

export const {
  setGetAllUserState,
  setCreateUserState,
  setGetMeState,
  setUpdateUserState,
  setDeleteUserState,
 } = userSlice.actions;

export default userSlice.reducer;
