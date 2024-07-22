
import { cartContext } from "./cartContext";
import "./Product.css"
import { useContext } from "react";



export const Product = ({ product }) => {
  const {cart, setCart} =useContext(cartContext);
  const title = product.title.length > 21 ? product.title.substring(0,20) + '...' :product.title

const addCart = () => {
  setCart([...cart, product])
};
const removeCart = () => {
  setCart(cart.filter((c) => c.id !== product.id));
};

  return (
    <div className='product'>
        <div className="img">
            <img src={product.image} alt={product.title} />
        </div>
    <div className="details">
    <h3>{title}</h3>
    <p>Price Rs:{product.price}</p>
    {cart.includes(product) ? <button onClick={removeCart} className='btnRemove'>Remove from cart</button>
  :  <button onClick={addCart}>Add to cart</button>}
    </div>
    </div>
  )

  
}


export default Product