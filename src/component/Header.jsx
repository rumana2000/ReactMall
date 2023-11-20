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
import { CartContext } from '../contexts/CartContext'
import { AuthContext } from "../contexts/AuthContext"
import { LOCALSTORAGE_AUTH_USER_KEY } from '../constant'
library.add(fab, fas, far)

export default function Header() {
  const { auth, setAuth } = useContext(AuthContext)
  const { cartItemCount } = useContext(CartContext);
  
  let signOutHandeler = () => {
    setAuth(false)
    localStorage.removeItem(LOCALSTORAGE_AUTH_USER_KEY)
  }
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
                className="text-xs absolute -right-4 -top-2 flex w-6 h-6 rounded-full bg-primary text-center item-center p-1 justify-center text-white">{cartItemCount}</span>
            </a>
            <div className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                {auth && <FontAwesomeIcon icon="fa-solid fa-user" />}
                {!auth && <NavLink to="/login" ><FontAwesomeIcon icon="fa-solid fa-user" /></NavLink>}
              </div>
              {auth && <div className="text-xs leading-3">{auth.firstName}</div>}
              {!auth && <div className="text-xs leading-3">Account</div>}
            </div>

            {auth && (
              <div className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl cursor-pointer" onClick={signOutHandeler}><FontAwesomeIcon icon="fa-solid fa-sign-out" /></div>
              <div className="text-xs leading-3">Logout</div>
            </div>
            )}
          </div>
        </div>
      </header>
      <Nav />
    </div>
  )
}