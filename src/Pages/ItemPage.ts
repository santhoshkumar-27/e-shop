import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, updateCart } from '../store/actions';

const ItemPage = () => {
  const { itemId } = useParams();
  const item = useSelector(state =>
    state.categories.flatMap(cat => cat.items).find(it => it.id === parseInt(itemId))
  );
  const cartItem = useSelector(state =>
    state.cart.find(it => it.id === parseInt(itemId))
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (cartItem) {
      dispatch(updateCart(item.id, cartItem.quantity + 1));
    } else {
      dispatch(addToCart({ ...item, quantity: 1 }));
    }
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ItemPage;
