import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./features/products/products.slice";
import { cartReducer } from "./features/cart/cart.slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
