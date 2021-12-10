import { createSlice, configureStore } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchForm',
  initialState: {
    query: ''
  },
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload
    }
  }
})

export const { updateQuery } = searchSlice.actions;
export default searchSlice.reducer
