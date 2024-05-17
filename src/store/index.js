import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './cart'

const store = configureStore({
    reducer: counterSlice.reducer
  })
  

  export default store