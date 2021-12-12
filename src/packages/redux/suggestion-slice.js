import { createSlice } from '@reduxjs/toolkit';

const suggestionSlice = createSlice({
  name: 'suggestionForm',
  initialState: {
    name: '',
    description: '',
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload
    },
    updateDescription: (state, action) => {
      state.description = action.payload
    },
  }
})

export const { updateName, updateDescription } = suggestionSlice.actions;
export default suggestionSlice.reducer