import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { modalWindowSlice } from './features/modalWindowSlice'
import { menuSlice } from './features/menuSlice'

const makeStore = () =>
  configureStore({
    reducer: {
        //modalwindow
        [modalWindowSlice.name]: modalWindowSlice.reducer,
        
        //main menu
        [menuSlice.name]: menuSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);