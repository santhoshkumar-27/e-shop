import React from 'react';
import { useSelector } from 'react-redux';

const OrdersPage = () => {
  const orders = useSelector(state => state.orders);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order ID: {order.id}
            <ul>
              {order.items.map(item => (
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
