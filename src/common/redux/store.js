import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createWrapper } from 'next-redux-wrapper';

import { DEV_MODE } from '#constants/envs';

import modalSlice from './modal/slice';

const store = configureStore({
  reducer: {
    [modalSlice.name]: modalSlice.reducer
  },
  devTools: DEV_MODE
});

setupListeners(store.dispatch);

const getStore = () => store;

export const wrapper = createWrapper(getStore, { debug: DEV_MODE });

export default store;
