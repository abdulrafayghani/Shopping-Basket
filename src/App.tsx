import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductItem } from './interface/Cart.interface';
import { addToBasket, removeFromBasket, remove,} from './features/cart/cartSlice';
import { images } from './images/imagesPath';
import { Home } from './features/Home/Home';
import { Cart } from "./features/cart/Cart";

function App() {
  const product = useSelector((state: ProductItem) => state);
  const dispatch = useDispatch();
  return (
    // <div>
    //   <button
    //     onClick={() =>
    //       dispatch(
    //         addToBasket({
    //           id: '1',
    //           title: 'Nike Original 1',
    //           slug: 'Nike-Original-1',
    //           price: 100,
    //           description:
    //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    //           image: images.Shoe1,
    //           count: 1,
    //           added: false,
    //         })
    //       )
    //     }
    //   >
    //     add shoe1
    //   </button>
    //   <button
    //     onClick={() =>
    //       dispatch(
    //         addToBasket({
    //           id: '2',
    //           title: 'Nike Original 2',
    //           slug: 'Nike-Original-2',
    //           price: 200,
    //           description:
    //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    //           image: images.Shoe2,
    //           count: 1,
    //           added: false,
    //         })
    //       )
    //     }
    //   >
    //     add shoe2
    //   </button>
    //   <button
    //     onClick={() =>
    //       dispatch(
    //         remove({
    //           id: '1',
    //           title: 'Nike Original 1',
    //           slug: 'Nike-Original-1',
    //           price: 100,
    //           description:
    //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    //           image: images.Shoe1,
    //           count: 1,

    //           added: false,
    //         })
    //       )
    //     }
    //   >
    //     remove
    //   </button>
    // </div>
    <Router>
      <Routes>
        <Route path='/'><Home />
          <Route path='/cart'><Cart /></Route>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
