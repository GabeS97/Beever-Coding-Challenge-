import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { quoteAPI } from "../provider/api";

// let initialState = {}

// export const quoteSlice = createSlice({
//     name: 'quotes',
//     initialState,
//     reducers: {
//         createQuote: (state, action) => { state[action] = action.quote },
//         getQuotes: (state) => state.quotes.map(quote => state[action.quote] = quote),
//     }
// })

// export const { createQuote, getQuotes } = quoteSlice.actions;

const initialState = {
    quotes: [],
    pending: true,
    error: null
}


export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes', async () => {
    const res = await axios.get(quoteAPI.baseURL);
    return res.data;
})
// export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes', () => {
//     return axios
//         .get(quoteAPI.baseURL)
//         .then(res => console.log(res))
// })

export const addQuote = createAsyncThunk('quotes/addQuote', async (firstPost) => {
    const res = await axios.post(quoteAPI.baseURL, firstPost);
    return res.data
})

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    // extraReducers: (builder) => {
    //     builder.addCase(fetchQuotes.pending, (state) => {
    //         state.loading = true
    //     })
    //     builder.addCase(fetchQuotes.fulfilled, (state, action) => {
    //         state.loading = false
    //         state.error = ''
    //         state.quotes = action.payload
    //     })
    //     builder.addCase(fetchQuotes.rejected, (state, action) => {
    //         state.loading = false
    //         state.quotes = []
    //         state.error = action.error.message
    //     })
    // }
    reducers: {
        quoteAdded: {
            reducer(state, action) {
                state.quotes.push(action.payload)
            }
        }
    }
    // reducers: {
        // fetchQuotes
    // }
})

export default quoteSlice
