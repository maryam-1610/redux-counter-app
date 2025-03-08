import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './ducks/counter'

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;