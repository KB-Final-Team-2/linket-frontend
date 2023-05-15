import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSilce'
import eventSlice from './slice/eventSlice'
import ticketSlice from './slice/ticketSlice'
import reviewSlice from './slice/reviewSlice'
import attendSlice from './slice/attendSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    event: eventSlice,
    ticket: ticketSlice,
    review: reviewSlice,
    attend: attendSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;