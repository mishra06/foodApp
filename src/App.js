import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import { createContext, useEffect, useState, useCallback } from 'react';
import { food_list } from './assets/assets';
import Footer from './components/footer/Footer';

export const myContext = createContext();

function App() {
  const [login, setLogin] = useState(false); 
  const [cardItems, setCardItems] = useState([]); 

  const addToCart = useCallback((itemId) => {
    console.log(itemId);
    setCardItems((prevItems) => {
      const updatedItems = [...prevItems];
      const itemIndex = updatedItems.findIndex(item => item.id === itemId);
      if (itemIndex === -1) {
        updatedItems.push({ id: itemId, count: 1 });
      } else {
        updatedItems[itemIndex].count++;
      }
      return updatedItems;
    });
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCardItems((prevItems) => {
      const updatedItems = [...prevItems];
      const itemIndex = updatedItems.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        updatedItems[itemIndex].count--;
        if (updatedItems[itemIndex].count === 0) {
          updatedItems.splice(itemIndex, 1);
        }
      }
      return updatedItems;
    });
  }, []);

  const getTotalItems = useCallback(() => {
    return cardItems.reduce((total, item) => total + item.count, 0);
  }, [cardItems]);

  const getSubTotal = useCallback(() => {
    return cardItems.reduce((total, item) => {
      const product = food_list.find((food) => food._id === item.id);
      return total + (product ? product.price * item.count : 0);
    }, 0);
  }, [cardItems]);

  const contextVal = {
    food_list,
    cardItems, 
    setCardItems,
    addToCart,
    removeFromCart,
    login,
    setLogin,
    getTotalItems,
    getSubTotal
  };

  return (
    <myContext.Provider value={contextVal}> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
      </div>
      <Footer/>
    </myContext.Provider>
  );
}

export default App;
