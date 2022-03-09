import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './Reducers/TodoReducer';

export const store = configureStore({
    reducer: {
        [todoReducer.name]: todoReducer.reducer
    },
});

export type RootStateType = ReturnType<typeof store.getState>;