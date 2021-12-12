import { createSlice } from '@reduxjs/toolkit';

const findVetSlice = createSlice({
  name: 'findVetForm',
  initialState: {
    state: '',
    city: '',
    cards: []
  },
  reducers: {
    updateState: (state, action) => {
      state.state = action.payload.isoCode
    },
    updateCity: (state, action) => {
      state.city = action.payload.name
    },
    createCards: (state, action) => {
      state.cards = action.payload
    }
  }
})

export const { updateState, updateCity, createCards } = findVetSlice.actions;
export default findVetSlice.reducer
