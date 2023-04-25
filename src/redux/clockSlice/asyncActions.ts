import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchClock = createAsyncThunk('clock / fetchClockStatus', async (clockUrl: string) => {
    const { data } = await axios.get(clockUrl)
    return data;
});