import { configureStore } from '@reduxjs/toolkit';
import webPage from './counterSlice';

export default configureStore({
    reducer: {
        web: webPage,
    },
})