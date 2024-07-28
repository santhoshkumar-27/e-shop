export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const PLACE_ORDER = 'PLACE_ORDER';

export const addToCart = (item: any) => ({ type: ADD_TO_CART, item });
export const removeFromCart = (itemId: any) => ({ type: REMOVE_FROM_CART, itemId });
export const updateCart = (itemId: any, quantity: any) => ({ type: UPDATE_CART, itemId, quantity });
export const placeOrder = (order: any) => ({ type: PLACE_ORDER, order });