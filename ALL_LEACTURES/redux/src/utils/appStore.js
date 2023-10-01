import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore(
    // store slices..
    {
        reducer: {
            cart: cartReducer
        }
    }

);
export default appStore;