import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload: { productId, quantity } }) => {
      console.log(productId, quantity);

      const itemIndex = state.findIndex((item) => item.productId == productId);

      if (itemIndex !== -1) {
        const newItem = {
          ...state[itemIndex],
          quantity: state[itemIndex].quantity + quantity,
        };

        const newState = [...state];
        newState[itemIndex] = newItem;

        return newState;
      } else {
        return [...state, { productId, quantity }];
      }
    },

    incQty: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.productId === action.payload
      );

      if (itemIndex !== -1) {
        const newState = [...state];

        const newItem = {
          ...newState[itemIndex],
          quantity: newState[itemIndex].quantity + 1,
        };

        newState[itemIndex] = newItem;

        return newState;
      }
    },
    decQty: (state, action) => {
      const index = state.findIndex(
        (item) => item.productId === action.payload
      );

      if (index !== -1 && state[index].quantity > 1) {
        const newState = [...state];

        const newItem = { ...newState[index] };
        newItem.quantity -= 1;

        newState[index] = newItem;

        return newState;
      }
    },
    removeItem: (state, action) => {
      const newState = state.filter(
        (item) => item.productId !== action.payload
      );
      return newState;
    },
    clearItem: (state, action) => {
      return initialState;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, incQty, decQty, removeItem, clearItem } =
  cartSlice.actions;

export const selectTotalCartItem = (state) =>
  state.cart.reduce((total, item) => (total += item.quantity), 0);

export const selectCart = (state) => {
  const products = state.products.data;
  const cart = state.cart;

  const items = cart.map((item) => ({
    product: products.find((product) => product.id == item.productId),
    quantity: item.quantity,
  }));

  return {
    items,
    products,
    incQty,
    decQty,
    removeItem,
    clearItem,
  };
};
