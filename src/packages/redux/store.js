import { configureStore } from '@reduxjs/toolkit';
import findVetReducer from './find-vet-slice'
import searchReducer from './search-slice'
import cardsReducer from './cards-slice'
// import findVetSlice from './find-vet-slice';

const store = configureStore({
  reducer: {
    findVet: findVetReducer,
    search: searchReducer,
    cards: cardsReducer
  },
})

export default store;