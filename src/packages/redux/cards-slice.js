import { createSlice } from '@reduxjs/toolkit';
import Card from '../../components/Card/Card'

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: []
  },
  reducers: {
    saveCards: (state, action) => {
      state.cards = action.payload
    },

  }
})

export const { saveCards } = cardsSlice.actions;
export default cardsSlice.reducer
