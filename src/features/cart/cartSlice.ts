import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from '../../interface/Cart.interface';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as ProductItem[],
  //   cart: [],
  //   count: 0,
  //   total: 0.0,
  // } as CartStateType,
  reducers: {
    // addToBasket: (state, { payload }: PayloadAction<ProductItem>) => {
    //   if (state.cart.find((item) => item.product.id === payload.id)) {
    //     state.cart = state.cart.map((cart) => {
    //       console.log('cart', cart);
    //       if (cart.product.id === payload.id) {
    //         return {
    //           product: payload,
    //           quantity: cart.quantity++,
    //         };
    //       }
    //       console.log('cart2', cart);
    //       return cart
    //     });
    //   }else{
    //     state.cart.push({
    //       product: payload,
    //       quantity: 1
    //     })
    //   }
    // },

    addToBasket: (state, { payload }: PayloadAction<ProductItem>) => {
      if (state.find((item: ProductItem) => item.id === payload.id)) {
        state = state.map((cart) => {
          if (cart.id === payload.id) {
            console.log(payload.price)
            return {
              ...cart,
              count: cart.count++,
              price: cart.price += payload.price
            };
          }
          return cart;
        });
      } else {
        state.push({ ...payload, added: true });
      }
    },
    remove: (state, { payload }: PayloadAction<ProductItem>) => {
      if (state.filter((item) => item.id === payload.id)[0].count === 1) {
        const index = state.findIndex((product) => product.id === payload.id);
        state.splice(index, 1);
      } else {
        state = state.map((product) => {
          if (product.id === payload.id) {
            console.log(product.price)
            return {
              ...payload,
              count: product.count--,
              price: product.price -= payload.price
            };
          }
          return product;
        });
      }
    },
    removeFromBasket: (state, { payload }: PayloadAction<ProductItem>) => {
      const index = Number(state.map((item) => item.id === payload.id));
      console.log(index);
      state.splice(index, 1);
    },
  },
});

export const { addToBasket, removeFromBasket, remove } = cartSlice.actions;
export default cartSlice.reducer;
