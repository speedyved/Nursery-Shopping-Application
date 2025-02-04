import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  let totalCost = 0;
  let totalAmount = 0;
//   const [totalCost, setTotalCost] = useState(0); 

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    totalAmount = cart.reduce((total, item) => total + item.cost * item.quantity, 0);
    console.log('value of total', totalAmount);
    return totalAmount;
  };

  const handleContinueShopping = (e) => {
    alert('Functionality to be added for future reference');
  };



  const handleIncrement = (item) => {
    const newItem = item;
    dispatch(updateQuantity({...newItem, quantity: newItem.quantity+1}))
  };

  const handleDecrement = (item) => {
   if(item.quantity > 1){
    const newItem = item;
    dispatch(updateQuantity({...newItem, quantity: newItem.quantity-1}))
   }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item))
  };

  const calculateTotalCost = (item) => {
    // useEffect(()=>{
        // let cost = cart.reduce((sum,cVal)=>{sum+cVal},0)
        // setTotalCost(cost);
    // },[totalCost])
    totalCost = item.cost * item.quantity
    console.log('totalCost', totalCost, item);
    return totalCost;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'>$: {totalAmount}</div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


