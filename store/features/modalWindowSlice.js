import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';

export const modalWindowSlice = createSlice({
  name: 'isOpened',
  initialState: {
    value: false
  },
  reducers: {
    changeIsOpened: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { changeIsOpened } = modalWindowSlice.actions;

export const selectIsOpened = (state) => state.isOpened.value;

export default combineReducers({
  title: modalWindowSlice.reducer,
});
