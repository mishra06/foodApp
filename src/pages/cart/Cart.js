import React from 'react';
import './Cart.css';
import { useContext } from 'react';
import { myContext } from '../../App';

const Cart = () => {
    
    const { cardItems, removeFromCart, food_list, setCardItems, getTotalItems, getSubTotal } = useContext(myContext);

  // Function to find the product details based on its ID
  const findProductById = (productId) => {
    return food_list.find((item) => item._id === productId);
  };

  // Function to remove all counts of a particular item from the cart
  const removeAllFromCart = (itemId) => {
    const updatedItems = cardItems.filter(item => item.id !== itemId);
    setCardItems(updatedItems);
  };

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-item">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {cardItems.map((item, index) => {
          const product = findProductById(item.id);
          return (
            <>
            <div key={index} className='cart-items-item'>
              <img src={product.image} alt="" />
              <p>{ product.name }</p>
              <p>${product.price}</p>
              <p>{item.count}</p>
              <p>${(product.price * item.count)}</p>
              <button onClick={() => { removeFromCart(item.id); removeAllFromCart(item.id); }}>Remove</button>
            </div>
            <hr />
            </>
          );
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>cart total</h2>
          <div>
            <div className="cat-total-details">
              <p>Subtotal</p>
              <p></p>
            </div>
            <hr />
            <div className="cat-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cat-total-details">
              <b>Total </b>
           
              <b>${getSubTotal()}</b>
            </div>
          </div>
          <button>PROCEED TO CKECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter here</p>
            <div className="cart-promo-input">
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
