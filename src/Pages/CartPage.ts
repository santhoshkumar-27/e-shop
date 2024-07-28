import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, removeFromCart, placeOrder } from '../store/actions';
import { useHistory } from 'react-router-dom';

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePlaceOrder = () => {
    const order = {
      id: new Date().getTime(),
      items: cart
    };
    dispatch(placeOrder(order));
    history.push('/orders');
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => dispatch(updateCart(item.id, item.quantity - 1))}>-</button>
            <button onClick={() => dispatch(updateCart(item.id, item.quantity + 1))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default CartPage;
