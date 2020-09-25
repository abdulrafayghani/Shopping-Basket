import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../store';

export const Cart = () => {
  const { products } = useSelector((state: rootState) => state);
  return (
    <div>
      {products.length > 0 ? <p>hello</p> : <p>your car is empty</p>}
      {products.map((item, ind) => (
        <p key={ind}> {item.price}</p>
      ))}
    </div>
  );
};
