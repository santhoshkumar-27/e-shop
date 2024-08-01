export interface State {
    categories: Category[]
    cart: CartItem[]
    orders: Order[]
  }
  
  export interface Category {
    id: number
    name: string
    items: Item[]
  }
  
  export interface Item {
    id: number
    name: string
    description: string
    price: number
  }
  

  export interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }
 
  export interface Order {
    id: number;
    items: CartItem[];
    orderDate: string; // or Date if you prefer
    totalAmount: number;
    status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  }