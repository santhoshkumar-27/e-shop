import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const cart = useSelector(state => state.cart);
  const history = useHistory();

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <h1>E-Shop</h1>
      <button onClick={() => history.push('/cart')}>
        Cart ({cartQuantity})
      </button>
    </header>
  );
};

export default Header;
