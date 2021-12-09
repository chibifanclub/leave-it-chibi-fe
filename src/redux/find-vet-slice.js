import { createSlice, configureStore } from '@reduxjs/toolkit';

const findVetSlice = createSlice({
  name: 'findVetForm',
  initialState: {
    state: '',
    city: ''
  },
  reducers: {
    updateState: (state, action) => {
      state.state = action.payload
    },
    updateCity: (state, action) => {
      state.city = action.payload
    }
  }
})

export const { updateState, updateCity } = findVetSlice.actions;
export default findVetSlice.reducer
