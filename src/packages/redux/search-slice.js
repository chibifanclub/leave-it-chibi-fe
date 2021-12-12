import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchForm',
  initialState: {
    query: '',
    error: '',
    show: false,
    item: { attributes: { name: 'TestName', description: 'this is a test' } },
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
    },
    saveModalItem: (state, action) => {
      state.item = action.payload
    }
  }
})

export const { updateQuery, updateSearchError, showModal, saveModalItem } = searchSlice.actions;
export default searchSlice.reducer
