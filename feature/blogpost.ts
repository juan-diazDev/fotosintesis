import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogpostList: [],

};

export const blogpostSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setGetAllPostState: (_, action) => action.payload,
    setCreatePostState: (_, action) => action.payload,
    setGetSinglePostState: (_, action) => action.payload,
    setUpdatePostState: (_, action) => action.payload,
    setDeletePostState: (_, action) => action.payload,
  }
});

export const {
  setGetAllPostState,
  setCreatePostState,
  setGetSinglePostState,
  setUpdatePostState,
  setDeletePostState,
} = blogpostSlice.actions;

export default blogpostSlice.reducer;
