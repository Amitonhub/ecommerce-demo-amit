import { configureStore } from '@reduxjs/toolkit';
import { dummyApi } from '../pages/api/Api'; 
import rootReducer from './reducers/rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
  reducer: {
    rootReducer,
    [dummyApi.reducerPath]: dummyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyApi.middleware),
});
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
