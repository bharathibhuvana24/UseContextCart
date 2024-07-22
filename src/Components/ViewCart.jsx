import { useEffect, useState, useContext } from 'react';
import "./ViewCart.css";
import { cartContext } from "./cartContext";

export const ViewCart = () => {
  const { cart, setCart } = useContext(cartContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseFloat(curr.price) * (curr.quantity || 1), 0));
  }, [cart]);

  const handleRemove = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return; // Prevent quantity from going below 1
    setCart(cart.map(product => 
      product.id === id ? { ...product, quantity: quantity } : product
    ));
  };

  return (
    <>
      <h1 className='cart-heading'>Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.image} alt="image" />
            </div>
            <div className="cart-product-details">
              <h3>Product name: {product.title}</h3>
              <p>Price Rs: {product.price}</p>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={() => handleQuantityChange(product.id, (product.quantity || 1) - 1)}>-</button>
                <span>{product.quantity || 1}</span>
                <button className="quantity-btn" onClick={() => handleQuantityChange(product.id, (product.quantity || 1) + 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <h1 className='cart-amt'>Total Amount Rs: {total.toFixed(2)}</h1>
    </>
  );
};

export default ViewCart;
