import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem, CartStateType } from '../../interface/Cart.interface';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    count: 0,
    total: 0.00
  } as CartStateType,
  reducers: {
    addToBasket: (state, { payload }: PayloadAction<ProductItem>) => {
      state.count += 1
      state.total = Number((state.total + payload.price).toFixed(2))
      if(state.cart.find((productItem) => productItem.product.id === payload.id)){
        state.cart = state.cart.map((productItem) => {
          if(productItem.product.id === payload.id){
            return { 
              product: payload,
              quantity: productItem.quantity + 1
            }
        }
        return productItem              
      })
      }else{
        state.cart.push({
          product: payload,
          quantity:  1
        })
      } 
    },
    remove: (state, { payload }: PayloadAction<ProductItem>) => {
      if(state.cart.filter((productItem) => productItem.product.id === payload.id)[0].quantity === 1){
        const index = Number(state.cart.map((productItem) => productItem.product.id === payload.id));
        state.cart.splice(index, 1)
      }
      else{
          state.cart = state.cart.map((productItem) => {
            if(productItem.product.id === payload.id){
              return {
                product: payload,
                quantity: productItem.quantity - 1
              }
            }
             return productItem
          })    
        }
      },
    removeFromBasket: (state, { payload }: PayloadAction<ProductItem>) => {
      const index = Number(state.cart.map((productItem) => productItem.product.id === payload.id));
      state.cart.splice(index, 1);
    },
  },
});

export const { addToBasket, removeFromBasket, remove } = cartSlice.actions;
export default cartSlice.reducer;
