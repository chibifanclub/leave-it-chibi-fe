import { configureStore } from '@reduxjs/toolkit';
import { updateState } from './find-vet-slice';
// import findVetSlice from './find-vet-slice';

const store = configureStore({
  reducer: {
    findVet: updateState,
  },
})

// console.log('find vet slice', findVetSlice.state);

export default store;