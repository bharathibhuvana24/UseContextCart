import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import ViewCart from './Components/ViewCart'
import { useState } from 'react'
import { cartContext } from './Components/cartContext'




function App() {
const [cart, setCart] =useState([]);

  return (
    <cartContext.Provider value={{cart, setCart}}>
      {/* to be wrapped under browserRouter */}
      <BrowserRouter>


        {/* imported header file in app.jsx */}
        <Header cart = {cart}/>

        {/* to load pages in the container i have created this classname with container  */}
        <div className='container'>
          <Routes>
            {/* specifying paths in App.jsx through Route path */}
            <Route
              path='/'
              element={<Home   /> } />
            <Route
              path='/Cart'
              element={<ViewCart />} />
          </Routes>

        </div>

      </BrowserRouter>

      </cartContext.Provider>

  )
}

export default App
