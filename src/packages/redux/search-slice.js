import { createSlice, configureStore } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchForm',
  initialState: {
    query: '',
    error: ''
  },
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload
    },
    updateSearchError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { updateQuery, updateSearchError } = searchSlice.actions;
export default searchSlice.reducer
