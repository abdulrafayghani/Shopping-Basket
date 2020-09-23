import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'

const store = configureStore({
    reducer: {
        products: cartReducer
    }
})

export default store