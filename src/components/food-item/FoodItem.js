import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { myContext } from '../../App';



const FoodItem = ({ id, name, price, description, image }) => {
  
  const { cardItems, addToCart, removeFromCart } = useContext(myContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-img" />
        {!cardItems.find(item => item.id === id) ? (
          <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" /> 
        ) : (
          <div className="food-item-counter">
          <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
          <p>{cardItems.find(item => item.id === id).count}</p>
          <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
        </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
