import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchLocation = createAsyncThunk('location / fetchLocationStatus', async (locationUrl: string) => {
    const { data } = await axios.get(locationUrl)
    return data;
});