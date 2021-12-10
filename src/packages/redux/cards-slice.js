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
      if (cards.length > 5) {
        state.cards = cards.slice(0, 5)
      } else {
        state.cards = cards
      }
    },
  }
})

export const { createCards } = cardsSlice.actions;
export default cardsSlice.reducer
