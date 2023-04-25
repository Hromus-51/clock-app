import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

interface FetchQuoteParams {
    quoteUrl: string;
    category: string;
}

export const fetchQuote = createAsyncThunk('quote / fetchQuoteStatus', async (params: FetchQuoteParams) => {
    const { quoteUrl, category } = params;
    const { data } = await axios.get(`${quoteUrl}${category}`)
    return data;
});