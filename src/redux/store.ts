import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/userSilce'
import authReducer from './slice/authSilce'
import eventReducer from './slice/eventSlice'
import ticketReducer from './slice/ticketSlice'
import reviewReducer from './slice/reviewSlice'
import attendReducer from './slice/attendSlice'
import hireReducer from "./slice/hireSlice"
import modalReducer from './slice/modalSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    event: eventReducer,
    ticket: ticketReducer,
    review: reviewReducer,
    attend: attendReducer,
    hire: hireReducer,
    modal: modalReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;