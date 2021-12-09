import { configureStore } from '@reduxjs/toolkit';
import findVetReducer from './find-vet-slice'
// import findVetSlice from './find-vet-slice';

const store = configureStore({
  reducer: {
    findVet: findVetReducer,
  },
})

// console.log('find vet slice', findVetSlice.state);

export default store;
