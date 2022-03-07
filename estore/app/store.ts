import { configureStore } from "@reduxjs/toolkit";

import ProductListSlice from "../components/Products/ProductList/ProductListSlice";

export const store = configureStore({ reducer: ProductListSlice });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
