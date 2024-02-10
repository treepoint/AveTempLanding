import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    value: {}
  },
  reducers: {
    changeMenu: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { changeMenu } = menuSlice.actions;

export const selectMenu = (state) => state.menu.value;

export default combineReducers({
  title: menuSlice.reducer,
});
