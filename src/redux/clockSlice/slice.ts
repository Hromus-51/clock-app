import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchClock } from './asyncActions';

export interface ClockInterface {
    day_of_week?: number,
    day_of_year?: number,
    dst?: true,
    timezone?: string,
    week_number?: 16
}

interface InitialState {
    clock: ClockInterface;
    status: string;
    hours: number;
    moreIsOpen: boolean;
}

const initialState: InitialState = {
    clock: {} as ClockInterface,
    status: '',
    hours: 8,
    moreIsOpen: false,
}

export const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {
        setStateHours(state, action: PayloadAction<number>) {
            state.hours = action.payload;
        },

        setMoreIsOpen(state, action: PayloadAction<boolean>) {
            state.moreIsOpen = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchClock.pending, (state) => {
            console.log('Идет запрос');
            state.clock = {};
            state.status = 'loading';
        })

        builder.addCase(fetchClock.fulfilled, (state, action) => {
            console.log('Запрос прошел удачно');
            state.clock = action.payload;
            state.status = 'success';
        })

        builder.addCase(fetchClock.rejected, (state) => {
            console.log('Ошибка запроса')
            state.clock = {};
            state.status = 'error';
        })
    }
})

export const selectClock = (state: RootState) => state.clockReducer.clock;
export const selectStatus = (state: RootState) => state.clockReducer.status;
export const selectHours = (state: RootState) => state.clockReducer.hours;
export const selectMoreIsOpen = (state: RootState) => state.clockReducer.moreIsOpen;
export const { setStateHours, setMoreIsOpen } = clockSlice.actions;

export default clockSlice.reducer;