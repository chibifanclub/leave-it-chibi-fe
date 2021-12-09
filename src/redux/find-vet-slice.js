import { createSlice, configureStore } from '@reduxjs/toolkit';

const findVetSlice = createSlice({
  name: 'findVetForm',
  initialState: {
    state: '',
    city: ''
  },
  reducers: {
    updateState: state => {
      state.state = 'Hello'
    }
  }
})

export const { updateState } = findVetSlice.actions;