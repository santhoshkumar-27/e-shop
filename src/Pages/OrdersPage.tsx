import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem, State } from '../Shared/interface';

const OrdersPage = () => {
  const orders = useSelector((state: State) => state.orders);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order ID: {order.id}
            <ul>
              {order.items.map((item : CartItem) => (
                <li key={item.id}>{item.name} - {item.quantity}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
