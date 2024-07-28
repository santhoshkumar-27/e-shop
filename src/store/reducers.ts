import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART, PLACE_ORDER } from './actions';

const initialState = {
    categories: [
      {
        id: 1,
        name: 'Electronics',
        items: [
          { id: 1, name: 'Laptop', description: 'A powerful laptop', price: 1000 },
          { id: 2, name: 'Smartphone', description: 'A modern smartphone', price: 800 },
        ],
      },
      {
        id: 2,
        name: 'Books',
        items: [
          { id: 3, name: 'React Book', description: 'Learn React', price: 30 },
          { id: 4, name: 'JavaScript Book', description: 'Learn JavaScript', price: 25 },
        ],
      },
    ],
    cart: [],
    orders: []
  };
  

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.item] };
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.itemId) };
    case UPDATE_CART:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.itemId ? { ...item, quantity: action.quantity } : item
        )
      };
    case PLACE_ORDER:
      return { ...state, orders: [...state.orders, action.order], cart: [] };
    default:
      return state;
  }
};

export default rootReducer;
