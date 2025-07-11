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
import cartReducer from '@/features/cart/cart.slice';
import filtersReducer from '@/features/filters/filters.slice';
import { newsCategoriesApi } from '@/features/newsCategories/newsCategories.api';
import { partnersApi } from '@/features/our-partners/partners.api';
import { partnerApi } from '@/features/partner/partner.api';
import { subCategoriesApi } from '@/features/subCategories/subCategories.api';

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
    cart: cartReducer,
    filters: filtersReducer,
    [newsCategoriesApi.reducerPath]: newsCategoriesApi.reducer,
    [partnersApi.reducerPath]: partnersApi.reducer,
    [partnerApi.reducerPath]: partnerApi.reducer,
    [subCategoriesApi.reducerPath]: subCategoriesApi.reducer,
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
      .concat(productApi.middleware)
      .concat(partnersApi.middleware)
      .concat(partnerApi.middleware)
      .concat(subCategoriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
