import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, updateCart } from '../store/actions';
import { Item, Order, State } from '../Shared/interface';


const ItemPage = () => {
  const { itemId } = useParams();
  const item: Item  = useSelector((state: State) =>
    state.categories.flatMap(cat => cat.items).find(it => it.id === parseInt(itemId as string)) as Item
  );
  const cartItem = useSelector((state: State) =>
    state.cart.find(it => it.id === parseInt(itemId as string))
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
      <h2>{(item as Item).name}</h2>
      <p>{(item as Item).description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ItemPage;
