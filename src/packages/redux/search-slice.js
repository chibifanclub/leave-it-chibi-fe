import { createSlice, configureStore } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchForm',
  initialState: {
    query: '',
    error: '',
    show: false
  },
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload
    },
    updateSearchError: (state, action) => {
      state.error = action.payload
    },
    showModal: (state, action) => {
      state.show = action.payload
    }
  }
})

export const { updateQuery, updateSearchError, showModal } = searchSlice.actions;
export default searchSlice.reducer
