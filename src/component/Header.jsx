import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import imgShoping from "../assets/Image/shopping-bag.png"
import Nav from './Nav'
import SearchProduct from "./SearchProduct"
// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { LOCALSTORAGE_AUTH_USER_KEY, LOCALSTORAGE_CART_KEY } from '../constant'
import { CartContext } from '../contexts/CartContext'
library.add(fab, fas, far)

export default function Header() {
  const [authUser, setAuthUser] = useState(null)
  const { cartItemCount } = useContext(CartContext);

  useEffect(() => {    
    if (localStorage.getItem(LOCALSTORAGE_AUTH_USER_KEY)) {
      let userData = JSON.parse(localStorage.getItem(LOCALSTORAGE_AUTH_USER_KEY));
      if (userData) {
        setAuthUser(userData)
      }
    }
    
  }, [])


  return (
    <div>
      <header className="py-4 shadow-sm bg-white">
        <div className="container flex item-center justify-between">
          <NavLink to="/" >
            <div className="flex">
              <h2 className="text-5xl text-primary">Buy</h2>
              <div> <img src={imgShoping} alt="" className="w-14" /> </div>
            </div>
          </NavLink>

          <div className="w-full max-w-xl relative cursor-pointer flex group">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </span>
            <SearchProduct />
          </div>
          <div className="flex item-center space-x-4">
            <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <NavLink to="/cart" > <FontAwesomeIcon icon="fa-solid fa-cart-shopping"/></NavLink>
              </div>
              <div className="text-xs leading-3">Cart</div>
              <span
                className="text-xs absolute -right-3 -top-1 flex  w-5 h-5 rounded-full bg-primary item-center justify-center text-white">{cartItemCount}</span>
            </a>
            <div className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                {authUser && <FontAwesomeIcon icon="fa-solid fa-user" />}
                {!authUser && <NavLink to="/login" ><FontAwesomeIcon icon="fa-solid fa-user" /></NavLink>}
              </div>
              {authUser && <div className="text-xs leading-3">{authUser.firstName}</div>}
              {!authUser && <div className="text-xs leading-3">Account</div>}
            </div>
          </div>
        </div>
      </header>
      <Nav />
    </div>
  )
}