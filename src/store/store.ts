import { configureStore } from '@reduxjs/toolkit';
import { productsApi, authApi, careersApi } from '@/features';

// reducers
import productsReducer from '../features/products/products.slice';
import authReducer from '../features/auth/auth.slice';
import { aboutApi } from '@/features/about/about.api';
import { newsroomApi } from '@/features/newsroom/newsroom.api';
import { categoriesApi } from '@/features/categories';
import { productApi } from '@/features/product';
import { contactUsApi } from '@/features/contact-us/contact-us.api';
import headerReducer from '@/features/header/header.slice';
import filtersReducer from '@/features/filters/filters.slice';
import { newsCategoriesApi } from '@/features/newsCategories/newsCategories.api';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsReducer,
    [careersApi.reducerPath]: careersApi.reducer,
    careers: productsReducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    about: productsReducer,
    [newsroomApi.reducerPath]: newsroomApi.reducer,
    news: productsReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [contactUsApi.reducerPath]: contactUsApi.reducer,
    header: headerReducer,
    filters: filtersReducer,
    [newsCategoriesApi.reducerPath]: newsCategoriesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(careersApi.middleware)
      .concat(aboutApi.middleware)
      .concat(newsroomApi.middleware)
      .concat(authApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(productApi.middleware)
      .concat(contactUsApi.middleware)
      .concat(newsCategoriesApi.middleware)
      .concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
