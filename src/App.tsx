import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderNav from './Components/Header';
import HomePage from './Pages/Homepage';
import CategoryPage from './Pages/Category';
import ItemPage from './Pages/ItemPage';
import CartPage from './Pages/CartPage';
import OrdersPage from './Pages/OrdersPage';


function App() {
  return (
    <Router>
      <HeaderNav />
      <Routes>
        <Route path="/"  Component={HomePage} />
        <Route path="/category/:categoryId" Component={CategoryPage} />
        <Route path="/item/:itemId" Component={ItemPage} />
        <Route path="/cart" Component={CartPage} />
        <Route path="/orders" Component={OrdersPage} />
      </Routes>
    </Router>
  );
}

export default App;
