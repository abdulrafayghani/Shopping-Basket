import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from '../../interface/Cart.interface';
import { images } from '../../images/imagesPath';

const initialState: ProductItem[] = [
  {
    id: '1',
    title: 'Nike Original 1',
    slug: 'Nike-Original-1',
    price: 100,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe1,
    count: 1,

    added: false,
  },
  {
    id: '2',
    title: 'Nike Original 2',
    slug: 'Nike-Original-2',
    price: 200,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe2,
    count: 1,
    added: false,
  },
  {
    id: '3',
    title: 'Nike Original 3',
    slug: 'Nike-Original-3',
    price: 220,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe3,
    count: 1,
    added: false,
  },
  {
    id: '4',
    title: 'Nike Original 4',
    slug: 'Nike-Original-4',
    price: 200,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe4,
    count: 1,
    added: false,
  },
  {
    id: '5',
    title: 'Nike Original 5',
    slug: 'Nike-Original-5',
    price: 150,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe5,
    count: 1,
    added: false,
  },
  {
    id: '6',
    title: 'Nike Original 6',
    slug: 'Nike-Original-6',
    price: 100,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe6,
    count: 1,
    added: false,
  },
  {
    id: '7',
    title: 'Nike Original 7',
    slug: 'Nike-Original-7',
    price: 250,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe7,
    count: 1,
    added: true,
  },
  {
    id: '8',
    title: 'Nike Original 8',
    slug: 'Nike-Original-8',
    price: 300,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe8,
    count: 1,
    added: true,
  },
  {
    id: '9',
    title: 'Nike Original 9',
    slug: 'Nike-Original-9',
    price: 200,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe9,
    count: 1,
    added: false,
  },
];

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
