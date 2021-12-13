import { createSlice } from '@reduxjs/toolkit';
import Card from '../../components/Card/Card'

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: []
  },
  reducers: {
    createCards: (state, action) => {
      const cards = action.payload.map(item => <Card item={item} />)
      state.cards = cards
    },

  }
})

export const { createCards } = cardsSlice.actions;
export default cardsSlice.reducer
