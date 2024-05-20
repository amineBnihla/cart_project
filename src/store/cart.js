import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    cart: []
  },
  reducers: {
    ADD_TO_CART: (state,{payload}) => {
      state.cart.push(payload)
    },
    REMOVE_FROM_CART: (state,{payload}) => {
      state.cart = state.cart.filter((ct)=>ct.id !== payload.id)
    }
  }
})


export const { ADD_TO_CART, REMOVE_FROM_CART } = counterSlice.actions


export default counterSlice