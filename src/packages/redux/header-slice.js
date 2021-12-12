import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    activeKey: ''
  },
  reducers: {
    updateActiveKey: (state, action) => {
      state.activeKey = action.payload
    }
  }
})

export const { updateActiveKey } = headerSlice.actions;
export default headerSlice.reducer
