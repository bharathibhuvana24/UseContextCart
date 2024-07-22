
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = ({cart}) => {
  return (
    <div className='navbar'>
            {/* logo and title of the page */}
        <div className='logo'>
            Shopping Cart
        </div>

            {/* router links  */}

            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
    
                <li>
                    <Link to={"/Cart"}> <span className='cart-count'>{cart.length}</span> View Cart</Link>
                </li>
    
            </ul>

    </div>
  )
}

export default Header