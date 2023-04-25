import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
//=============================================
import quoteReducer from './quoteSlice/slice';
import clockReducer from './clockSlice/slice';
import locationSlice from './locationSlice/slice';

export const store = configureStore({
    reducer: {
        quoteReducer,
        clockReducer,
        locationSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()