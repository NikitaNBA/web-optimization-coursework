import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from './slices/navigationSlice'
import contentReducer from './slices/contentSlice'

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    content: contentReducer,
  },
  devTools: import.meta.env.DEV,
})

export default store