import { configureStore } from '@reduxjs/toolkit';
import { productsApi, authApi } from '@/features';

// reducers
import productsReducer from '../features/products/products.slice';
import authReducer from '../features/auth/auth.slice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
