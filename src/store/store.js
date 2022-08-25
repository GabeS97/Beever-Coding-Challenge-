import { configureStore } from "@reduxjs/toolkit";
import { quoteSlice } from './quotes'

export const store = configureStore({
    reducer: {
        quotes: quoteSlice.reducer,
    }
});
