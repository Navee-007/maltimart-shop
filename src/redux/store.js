import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./slices/CartSlices";

const store = configureStore({
  reducer:{
    cart: CartSlice,
  },

});

export default store;