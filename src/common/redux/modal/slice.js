import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload: modalName }) => {
      state[modalName] = true;
    },
    closeModal: (state, { payload: modalName }) => {
      state[modalName] = false;
    },
    clearModals: () => initialState
  }
});

export const { openModal, closeModal, clearModals } = modalSlice.actions;

export default modalSlice;
