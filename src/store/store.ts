import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '@/features';

// reducers
import productsReducer from '../features/products/products.slice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
