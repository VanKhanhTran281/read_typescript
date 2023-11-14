import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './reducers';
import { useDispatch } from 'react-redux';

const middleware = getDefaultMiddleware({
  thunk: true,
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;