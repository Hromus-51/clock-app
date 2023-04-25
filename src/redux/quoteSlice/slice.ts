import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchQuote } from './asyncActions';

export interface QuoteInterface {
    content: string,
    author: string
}

interface InitialState {
    quote: QuoteInterface[];
    status: string;
}

const initialState: InitialState = {
    quote: [],
    status: ''
}

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchQuote.pending, (state) => {
            console.log('Идет запрос');
            state.quote = [];
            state.status = 'loading';
        })

        builder.addCase(fetchQuote.fulfilled, (state, action) => {
            console.log('Запрос прошел удачно');
            state.quote = action.payload;
            state.status = 'success';
        })

        builder.addCase(fetchQuote.rejected, (state) => {
            console.log('Ошибка запроса')
            state.quote = [];
            state.status = 'error';
        })
    }
})

export const selectQuote = (state: RootState) => state.quoteReducer.quote;
export const selectStatus = (state: RootState) => state.quoteReducer.status;

export default quoteSlice.reducer;