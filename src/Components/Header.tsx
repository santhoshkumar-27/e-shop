import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { State } from '../Shared/interface';

const HeaderNav: React.FC = () => {
  const cart = useSelector((state: State) => state.cart);
  const navigate = useNavigate();

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <h1>E-Shop</h1>
      <button onClick={() => navigate('/cart')}>
        Cart ({cartQuantity})
      </button>
    </header>
  );
};

export default HeaderNav;
