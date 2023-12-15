import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10,
    times: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1      
    },
    incrementBy: (state, value) => {
      state.counter += value.payload
    },
    decrement: (state) => {
      state.counter -= 1
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, incrementBy, decrement } = counterSlice.actions