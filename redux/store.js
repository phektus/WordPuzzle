import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './features/score/scoreSlice'

export default configureStore({
  reducer: {
    score: scoreReducer
  }
})