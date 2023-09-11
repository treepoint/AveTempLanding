import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { modalWindowSlice } from './features/modalWindowSlice'
const makeStore = () =>
  configureStore({
    reducer: {
        //modalwindow
        [modalWindowSlice.name]: modalWindowSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);