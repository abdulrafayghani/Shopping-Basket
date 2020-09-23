export interface ProductItem {
  id: string;
  title: string;
  slug: string;
  price: number;
  count: number;
  description: string;
  image: string;
  added?: boolean;
}

export interface CartType {
  product: ProductItem
  quantity: number
}
 
export interface CartStateType {
  cart: CartType[]
  count: number
  total: number
}