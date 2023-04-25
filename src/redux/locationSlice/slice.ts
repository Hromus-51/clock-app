import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchLocation } from './asyncActions';

export interface LocationInterface {
    country?: string;
    city?: string;
}

interface InitialState {
    location: LocationInterface;
    status: string;
}

const initialState: InitialState = {
    location: {} as LocationInterface,
    status: '',
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLocation.pending, (state) => {
            console.log('Идет запрос');
            state.location = {};
            state.status = 'loading';
        })

        builder.addCase(fetchLocation.fulfilled, (state, action) => {
            console.log('Запрос прошел удачно');
            state.location = action.payload;
            state.status = 'success';
        })

        builder.addCase(fetchLocation.rejected, (state) => {
            console.log('Ошибка запроса')
            state.location = {};
            state.status = 'error';
        })
    }
})

export const selectLocation = (state: RootState) => state.locationSlice.location;
export default locationSlice.reducer;