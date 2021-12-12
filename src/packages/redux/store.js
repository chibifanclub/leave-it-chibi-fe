import { configureStore } from '@reduxjs/toolkit';
import findVetReducer from './find-vet-slice'
import searchReducer from './search-slice'
import cardsReducer from './cards-slice'
import headerReducer from './header-slice'
import suggestionReducer from './suggestion-slice'
// import findVetSlice from './find-vet-slice';

const store = configureStore({
  reducer: {
    findVet: findVetReducer,
    search: searchReducer,
    cards: cardsReducer,
    header: headerReducer,
    suggestion: suggestionReducer,
  },
})

export default store;
