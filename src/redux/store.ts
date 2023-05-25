import { combineReducers, configureStore, createStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './slice/authSilce';
import eventReducer from './slice/eventSlice';
import ticketReducer from './slice/ticketSlice';
import reviewReducer from './slice/reviewSlice';
import attendReducer from './slice/attendSlice';
import hireReducer from "./slice/hireSlice";
import modalReducer from './slice/modalSlice';
import { useDispatch } from 'react-redux';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import sessionStorage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'reduxjs-toolkit-persist';

const rootReducer : any = combineReducers({
    auth: authReducer,
    event: eventReducer,
    ticket: ticketReducer,
    review: reviewReducer,
    attend: attendReducer,
    hire: hireReducer,
    modal: modalReducer
})

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    stateReconciler: autoMergeLevel1,
};

const _persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: _persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ],
      },
    }),
  });

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
